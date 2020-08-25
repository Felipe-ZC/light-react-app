const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    },
    module: {
    	rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
							loader: 'babel-loader'
					}
        },
				{
					test: /\.css$/,
					use: "style-loader"
        },
        {
					test: /\.(png|jpg|gif)$/,
					use: "file-loader"	
        }
      ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            hash: true,
            filename: "index.html",  //target html
            template: "./public/index.html" //source html
        }),
    ]
}
