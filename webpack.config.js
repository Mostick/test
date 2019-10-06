const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    return {
        devtool: argv.mode === 'development' ? 'inline-source-map' : "",
        entry: "./src/index.js",
        output: {
            path: path.join(__dirname, "/bundle"),
            filename: "index.js"
        },
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: 'url-loader'
                        }
                    ]
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            })
        ]
    }
};