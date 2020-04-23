// Basics
const gulp = require("gulp");
const newer = require("gulp-newer");
const sourcemaps = require("gulp-sourcemaps");

// Build
const concat = require("gulp-concat");
const include = require("gulp-file-include");
const replace = require("gulp-replace");
const inline = require("gulp-inline");
const postCss = require("gulp-postcss");
const postcssImport = require("postcss-import");
const preCss = require("precss");
const autoprefixer = require("autoprefixer");
const atomizer = require("gulp-atomizer");
const atomCssConfig = require("./atomCssConfig.js");
const assets = require("postcss-assets");

// Production
const htmlMin = require("gulp-htmlmin");


const SRC = "src";
const DEST = "docs";


// ---------- BUILD ---------- //

const buildJsTask = () =>
	gulp.src([
		"node_modules/webfontloader/webfontloader.js",
		"node_modules/skrollr/dist/skrollr.min.js",
		"node_modules/skrollr-menu/dist/skrollr.menu.min.js",
		`${SRC}/js/DOMTools.js`,
		`${SRC}/js/main.js`,
		`${SRC}/js/index.js`
	])
		.pipe(sourcemaps.init())
		.pipe(concat("app.js"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(DEST));

const buildHtmlTask = () =>
	gulp.src([`${SRC}/htm/index.htm`])
		.pipe(include())
		.pipe(gulp.dest(DEST));

const buildCssAtomsTask = () =>
	gulp.src([`${SRC}/**/*.htm`])
		.pipe(atomizer(atomCssConfig))
		.pipe(gulp.dest(`${SRC}/style`));

const buildCssTask = () =>
	gulp.src([
		`${SRC}/style/_variables.scss`,
		`${SRC}/style/common.scss`,
		`${SRC}/style/!(_atoms)*.scss`,
		`${SRC}/style/z_atoms.scss`
	])
		.pipe(sourcemaps.init())
		.pipe(postCss([
			postcssImport(), // functionality already provided by css-loader but PostCSS plugin needed because if not a "Right now, PostCSS does nothing." error is thrown
			preCss({ features: { "color-mod-function": { unresolved: "warn" } } }),
			autoprefixer(), // https://github.com/ai/browserslist
			assets({ loadPaths: [SRC] })
		]))
		.pipe(concat("index.css"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(DEST));

const copyAssetsTask = () => {
	gulp.src([`${SRC}/favicon.ico`, `${SRC}/CNAME`])
		.pipe(newer(DEST))
		.pipe(gulp.dest(DEST));
	return gulp.src([`${SRC}/img/*`])
		.pipe(newer(`${DEST}/img`))
		.pipe(gulp.dest(`${DEST}/img`));
};


// ---------- PRODUCTION ---------- //

const prodTask = () =>
	gulp.src([`${DEST}/index.htm`])
		.pipe(inline({
			// base: DEST,
			disabledTypes: ["img"/*, "svg", "js", "css"*/]
		}))
		.pipe(replace(/(<!-- buildDev:start -->)[\s\S]+(<!-- buildDev:end -->)/, ""))
		.pipe(htmlMin({
			collapseWhitespace: true,
			minifyCSS: true,
			minifyJS: true,
			removeAttributeQuotes: true,
			removeComments: true,
			removeRedundantAttributes: true
		}))
		.pipe(gulp.dest(DEST));


const buildTask = gulp.parallel(buildJsTask, buildHtmlTask, gulp.series(buildCssAtomsTask, buildCssTask), copyAssetsTask);

exports.dev = gulp.series(buildTask, function watchTask() {
	gulp.watch([`${SRC}/js/*.js`], buildJsTask);
	gulp.watch([`${SRC}/**/*.htm`], buildHtmlTask);
	gulp.watch([`${SRC}/style/*.scss`, `!${SRC}/style/z_atoms.scss`, `${SRC}/**/*.htm`], gulp.series(buildCssAtomsTask, buildCssTask));
	gulp.watch([`${SRC}/img/**`], gulp.parallel(copyAssetsTask));
});
exports.build = gulp.series(buildTask, prodTask);
exports.default = exports.build;
