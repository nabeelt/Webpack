var path = require('path');
var webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
      },
    entry: './js/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devServer: {
        port: 3030
      },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};