const fs = require("fs");
const path = require("path");

const ConcatPlugin = require("webpack-concat-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ProgressPlugin = require("webpack/lib/ProgressPlugin");

const postcssImport = require("postcss-import");
const assets = require("postcss-assets");
const autoprefixer = require("autoprefixer");
const preCss = require("precss");

// const { HotModuleReplacementPlugin, NoEmitOnErrorsPlugin/*, NamedModulesPlugin, SourceMapDevToolPlugin  */ } = require("webpack");

module.exports = {
	mode: "development",
	entry: "./src/js/index.js",
	output: {
		path: __dirname + "/docs",
		filename: "[name].[chunkhash:8].js"
	},
	devtool: "source-map",
	module: {
		rules: [
			// {
			// 	test: /\.(js)$/,
			// 	enforce: "pre",
			// 	exclude: /node_modules/,
			// 	use: "eslint-loader"
			// },
			// {
			// 	test: /\.htm$/,
			// 	loader: "webpack-atomizer-loader",
			// 	exclude: /(node_modules)/,
			// 	query: {
			// 		configPath: path.resolve("./atomCssConfig.js")
			// 	}
			// },
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							from: undefined,
							ident: "postcss",
							plugins: loader => [
								// postcssImport(),
								preCss({ features: { "color-mod-function": { unresolved: "warn" } } }),
								autoprefixer({ browsers: ["safari 9", "ie 11"] }), // https://github.com/ai/browserslist
								assets({ loadPaths: ["src"] })
							]
						}
					},
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
			inlineSource: ".(js|css)$",
			template: "./src/htm/index.ejs",
			filename: "index.htm",
			intro: fs.readFileSync(__dirname + "/src/htm/intro.htm"),
			whoWeAre: fs.readFileSync(__dirname + "/src/htm/who-we-are.htm"),
			activities: fs.readFileSync(__dirname + "/src/htm/activities.htm"),
			theBoard: fs.readFileSync(__dirname + "/src/htm/the-board.htm"),
			joinUs: fs.readFileSync(__dirname + "/src/htm/join-us.htm"),
			faq: fs.readFileSync(__dirname + "/src/htm/faq.htm"),
			contact: fs.readFileSync(__dirname + "/src/htm/contact.htm"),
			topBar: fs.readFileSync(__dirname + "/src/htm/top-bar.htm")
		}),
		new HtmlWebpackInlineSourcePlugin(),
		new MiniCssExtractPlugin(
			{ filename: "[name]-[contenthash:8].css"}
		),
		new ProgressPlugin()
	]
}
