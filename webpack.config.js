const fs = require("fs");
const path = require("path");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const postcssImport = require("postcss-import");
const assets = require("postcss-assets");
const autoprefixer = require("autoprefixer");
const preCss = require("precss");

// const { HotModuleReplacementPlugin, NoEmitOnErrorsPlugin/*, NamedModulesPlugin, SourceMapDevToolPlugin  */ } = require("webpack");
// console.log(fs.readFileSync(__dirname + `/src/htm/intro.htm`).toString())
// console.log(includeHtmlSections(['intro', 'whoWeAre', 'activities', 'theBoard', 'joinUs', 'faq', 'contact', 'footer', 'topBar']))
// console.log(typeof fs.readFileSync(__dirname + `/src/htm/intro.htm`))
// function includeHtmlSections(sections) {
// 	const sectionsObject = {};
// 	sections.forEach(section => sectionsObject[section] = fs.readFileSync(__dirname + `/src/htm/${section}.htm`));
// 	return sectionsObject;
// }
function includeHtmlSections(sections) {
	const replaces = [];
	sections.forEach(section => replaces.push({ search: `@@include('${section}.htm')`, strict: false, replace: fs.readFileSync(__dirname + `/src/htm/${section}.htm`).toString() }));
	return replaces;
}

module.exports = {
	mode: process.env.NODE_ENV || "development",
	entry: "./src/js/index.js",
	output: {
		path: __dirname + "/docs",
		// filename: "[name]-[chunkhash:8].js"
	},
	devtool: "source-map",
	devServer: {
		contentBase: './docs',
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "eslint-loader",
						options: {
							emitWarning: true,
							fix: true
						}
					},
					// {
					// 	loader: "postcss-loader",
					// 	options: {
					// 		// ident: "postcss", //Not rally needed https://webpack.js.org/configuration/module/#useentry
					// 		plugins: loader => [
					// 			postcssImport(), // functionality already provided by css-loader but PostCSS plugin needed because if not a "Right now, PostCSS does nothing." error is thrown
					// 			preCss({ features: { "color-mod-function": { unresolved: "warn" } } }),
					// 			autoprefixer(),
					// 			assets({ loadPaths: ["src"] })
					// 		]
					// 	}
					// },
				]
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: process.env.NODE_ENV === 'development',
						},
					},
					// { // It would save a few lines in index.scss. But not really worth the addition
					// 	loader: "import-glob-loader", // https://www.npmjs.com/package/import-glob-loader https://stackoverflow.com/questions/40356239/webpack-how-to-put-all-css-files-into-one-css-file
					// 	enforce: "pre" // https://webpack.js.org/migrate/3/#modulepreloaders-and-modulepostloaders-were-removed
					// },
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							// ident: "postcss", //Not rally needed https://webpack.js.org/configuration/module/#useentry
							plugins: loader => [
								postcssImport(), // functionality already provided by css-loader but PostCSS plugin needed because if not a "Right now, PostCSS does nothing." error is thrown
								preCss({ features: { "color-mod-function": { unresolved: "warn" } } }),
								autoprefixer(),
								assets({ loadPaths: ["src"] })
							]
						}
					},
				]
			},
			{
				test: /\.htm$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							attrs: false
						}
					},
					// {
					// 	loader: 'raw-loader',
					// 	options: {
					// 		esModule: false,
					// 	},
					// },
					{
						loader: 'string-replace-loader',
						options: {
							multiple: includeHtmlSections(['intro', 'who-we-are', 'activities', 'the-board', 'join-us', 'faq', 'contact', 'footer', 'top-bar'])
						}
					},
					{
						loader: 'webpack-atomizer-loader',
						options: {
							configPath: path.resolve("./atomCssConfig.js")
						}
					}
				]
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{ from: "./src/favicon.ico", to: "favicon.ico" },
			{ from: "./src/CNAME", to: "./" },
			{ from: "./src/img/*", to: "./img/", flatten: true }
		]),
		new HtmlWebpackPlugin({
			template: "./src/htm/index.htm",
			filename: "index.htm",
			inlineSource: ".(js|css)$", // html-webpack-inline-source-plugin option
			// ...includeHtmlSections(['intro', 'whoWeAre', 'activities', 'theBoard', 'joinUs', 'faq', 'contact', 'footer', 'topBar'])
		}),
		new HtmlWebpackInlineSourcePlugin(),
		new MiniCssExtractPlugin(
			// { filename: "[name]-[chunkhash:8].css"}
		)
	]
}
