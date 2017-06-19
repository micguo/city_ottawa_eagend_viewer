const path = require('path');
const webpack = require('webpack');
let nodeExternals = require('webpack-node-externals');


module.exports = [{
    entry: {
        app: './server.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server_bundle.js'
    },
    context: path.resolve(__dirname, './src/server'),
    // https://github.com/Automattic/mongoose/pull/4512
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify("5fa3b9"),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: "1+1",
            "typeof window": JSON.stringify("object"),
            env: {
                DEVELOPMENT: JSON.stringify(false)
            }
        })
    ],
    resolve: {
        modules: [
            path.join(__dirname, 'src/server'),
            'node_modules'
        ]
    },
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
},{
    entry: {
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js'
    },
    context: path.resolve(__dirname, './src/client'),
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    externals: {
        // Use external version of React
        "react": "React",
        "react-dom": "ReactDOM"
    },
}];