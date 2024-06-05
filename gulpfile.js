// Dev
import gulp from "gulp";
import newer from "gulp-newer";
import sourcemaps from "gulp-sourcemaps";

// Build
import concat from "gulp-concat";
import include from "gulp-file-include";
import replace from "gulp-replace";
import inline from "gulp-inline";
import postCss from "gulp-postcss";
import preCss from "precss";
import atomizer from "gulp-atomizer";
import atomCssConfig from "./atomCssConfig.js";
import assets from "postcss-assets";

// Production
import htmlMin from "gulp-html-minifier-terser";


const SRC = "src";
const DEST = "docs";


// ---------- BUILD ---------- //

const buildJsTask = () =>
	gulp.src([
		"node_modules/skrollr/dist/skrollr.min.js",
		"node_modules/skrollr-menu/dist/skrollr.menu.min.js",
		`${SRC}/js/DOMTools.js`,
		`${SRC}/js/index.js`
	])
		.pipe(sourcemaps.init())
		.pipe(concat("app.js"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(DEST));

const buildHtmlTask = () =>
	gulp.src([`${SRC}/html/index.html`])
		.pipe(include())
		.pipe(gulp.dest(DEST));

const buildCssAtomsTask = () =>
	gulp.src([`${SRC}/**/*.html`])
		.pipe(atomizer(atomCssConfig))
		.pipe(gulp.dest(`${SRC}/style`));

const buildCssTask = () =>
	gulp.src([
		`${SRC}/style/_variables.scss`,
		`${SRC}/style/common.scss`,
		`${SRC}/style/*.scss`
	])
		.pipe(sourcemaps.init())
		.pipe(concat("style.css"))
		.pipe(postCss([
			preCss({ features: { "color-mod-function": { unresolved: "warn" } } }),
			assets({ loadPaths: [SRC] })
		]))
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
	gulp.src([`${DEST}/index.html`])
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

export const dev = gulp.series(buildTask, function watchTask() {
	gulp.watch([`${SRC}/js/*.js`], buildJsTask);
	gulp.watch([`${SRC}/**/*.html`], buildHtmlTask);
	gulp.watch([`${SRC}/style/*.scss`, `!${SRC}/style/z_atoms.scss`, `${SRC}/**/*.html`], gulp.series(buildCssAtomsTask, buildCssTask));
	gulp.watch([`${SRC}/img/**`], gulp.parallel(copyAssetsTask));
});
export const build = gulp.series(buildTask, prodTask);
export default build;
