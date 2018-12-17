// Basics
const del = require("del");
const gulp = require("gulp");
const newer = require("gulp-newer");
const sourcemaps = require("gulp-sourcemaps");

// Lint
const esLint = require("gulp-eslint");
const htmlHint = require("gulp-htmlhint");
const styleLint = require("gulp-stylelint");

// Build
const concat = require("gulp-concat");
const include = require("gulp-file-include");
const replace = require("gulp-replace");
const inline = require("gulp-inline");
const postCss = require("gulp-postcss");
const preCss = require("precss");
const autoprefixer = require("autoprefixer");
const atomizer = require("gulp-atomizer");
const assets = require("postcss-assets");

// Production
const htmlMin = require("gulp-htmlmin");



const SRC = "src";
const DEST = "docs";



// ---------- LINT ---------- //

const esLintTask = () => {
	return gulp.src([`${SRC}/js/*.js`])
		.pipe(esLint())
		.pipe(esLint.format())
		.pipe(esLint.failAfterError());
};

const htmlHintTask = () => {
	return gulp.src([`${SRC}/**/*.htm`])
		.pipe(htmlHint(".htmlhintrc"))
		// .pipe(htmlHint.reporter())
		.pipe(htmlHint.failReporter());
};

const stylelintTask = () => {
	return gulp.src([`${SRC}/style/*.scss`, `!${SRC}/style/_atoms.scss`]).pipe(styleLint({
		reporters: [{ formatter: "string", console: true }]
	}));
};





// ---------- BUILD ---------- //

const buildJsTask = async () => {
	return gulp.src(
		[
			"node_modules/webfontloader/webfontloader.js",
			"node_modules/skrollr/dist/skrollr.min.js",
			"node_modules/skrollr-menu/dist/skrollr.menu.min.js",
			`${SRC}/js/DOMTools.js`,
			`${SRC}/js/aegeeLondon.js`,
			`${SRC}/js/index.js`
		])
		.pipe(sourcemaps.init())
		.pipe(concat("app.js"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(DEST));
};

const buildHtmlTask = () => {
	return gulp.src([`${SRC}/index.htm`])
		.pipe(include())
		.pipe(gulp.dest(DEST));
};

const buildCssAtomsTask = () => {
	return gulp.src([`${SRC}/**/*.htm`])
		.pipe(atomizer({
			outfile: "_atoms.scss",
			acssConfig: {
				breakPoints: {
					bi: "@media (min-width: 2000px)",
					me: "@media (max-width: 1470px)",
					sm: "@media (max-width: 1100px)",
					mo: "@media (max-width: 810px)"
				}
			}
		}))
		.pipe(gulp.dest(`${SRC}/style`));
};

const buildCssTask = () => {
	return gulp.src(
		[
			`${SRC}/style/common.scss`,
			`${SRC}/style/_atoms.scss`,
			`${SRC}/style/!(_atoms)*.scss`
		])
		.pipe(sourcemaps.init())
		.pipe(concat("style.css"))
		.pipe(postCss([
			preCss({ extension: "scss" }),
			autoprefixer({ browsers: ["safari 9", "ie 11"] }), // https://github.com/ai/browserslist
			assets({ loadPaths: [SRC] })
		]))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(DEST));
};

const copyAssetsTask = () => {
	gulp.src([`${SRC}/favicon.ico`, `${SRC}/CNAME`])
		.pipe(newer(DEST))
		.pipe(gulp.dest(DEST));
	return gulp.src([`${SRC}/img/*`])
		.pipe(newer(`${DEST}/img`))
		.pipe(gulp.dest(`${DEST}/img`));
};





// ---------- PRODUCTION ---------- //

const prodTask = () => {
	return gulp.src([`${DEST}/index.htm`])
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
};



const buildTask = gulp.parallel(buildJsTask, buildHtmlTask, gulp.series(buildCssAtomsTask, buildCssTask), copyAssetsTask);

exports.lint = gulp.parallel(esLintTask, htmlHintTask, stylelintTask);
exports.buildWatch = gulp.series(buildTask, function watchTask() {
	gulp.watch([`${SRC}/js/*.js`], gulp.parallel(esLintTask, buildJsTask));
	gulp.watch([`${SRC}/**/*.htm`], gulp.parallel(htmlHintTask, buildHtmlTask));
	gulp.watch([`!${SRC}/style/_atoms.scss`, `${SRC}/style/*.scss`, `${SRC}/**/*.htm`], gulp.parallel(stylelintTask, gulp.series(buildCssAtomsTask, buildCssTask)));
	gulp.watch([`${SRC}/img/**`], gulp.parallel(copyAssetsTask));
});
exports.buildProd = gulp.series(buildTask, prodTask);
exports.clean = () => del(DEST);
exports.default = exports.watch;
