const ExtractTextPlugin = require("extract-text-webpack-plugin"); 
const webpack = require('webpack');

module.exports = {
	devtool: "source-map",
	
	entry: "./src/index",
	output:{
		filename: "./dist/bundle.js"
	},
	
	watch: true,
	
	module: {
		loaders: [
		{
			test: /\.js$/,
			loader: "babel-loader",
			exclude: /node_modules$/,
			query: {
				presets: ["es2015"]
			}
		},
		{
			test: /\.sass/,
			loader: ExtractTextPlugin.extract({
				fallbackLoader: "style-loader",
				loader: "css-loader!sass-loader"
			})
		},
		{
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file-loader?name=public/fonts/[name].[ext]'
    },
    {
      test: /\.jpg$/,
      loader: 'file-loader'
    }]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		new ExtractTextPlugin("./dist/style.css")
	]
};