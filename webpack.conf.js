// const fs = require("fs");
// const path = require("path");
// const rxPaths = require("rxjs/_esm5/path-mapping");

const postcssImport = require("postcss-import");
const autoprefixer = require("autoprefixer");
const preCss = require("precss");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { HotModuleReplacementPlugin, NoEmitOnErrorsPlugin/*, NamedModulesPlugin, SourceMapDevToolPlugin  */ } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ProgressPlugin = require("webpack/lib/ProgressPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const { AngularCompilerPlugin } = require("@ngtools/webpack");
// const { NamedLazyChunksWebpackPlugin/* , BaseHrefWebpackPlugin */ } = require("@angular/cli/plugins/webpack");

module.exports = {
	mode: "development",
	entry: "src/index.js",
	output: {
	path: __dirname + "/static",
		filename: "[name].[chunkhash:8].js"
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: "eslint-loader"
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							ident: "postcss",
							plugins: (loader) => [postcssImport(), preCss(), autoprefixer()]
						}
					}
				]
			}
		]
	},
	plugins: [new MiniCssExtractPlugin({filename: "[name]-[contenthash:8].css"})]
}
