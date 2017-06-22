const path = require('path');
const webpack = require('webpack');
let nodeExternals = require('webpack-node-externals');


module.exports = [{
    entry: {
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js',
        publicPath: '/'
    },
    context: path.resolve(__dirname, './src/client'),
    resolve: {
        modules: [
            path.join(__dirname, 'src/client'),
            'node_modules'
        ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [{
                    loader: 'react-hot-loader'
                }, {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            'es2015',
                            'stage-1',
                            'react'
                        ]
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /.css$/,
                loader: ['style-loader', 'css-loader']
            }
        ]
    },
    externals: {
        // Use external version of React
        // "react": "React",
        // "react-dom": "ReactDOM"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new webpack.NoEmitOnErrorsPlugin(),
        // do not emit compiled assets that include errors
    ],
    devServer: {
        // Enable history API fallback so HTML5 History API based
        // routing works. Good for complex setups.
        historyApiFallback: true,

        // Display only errors to reduce the amount of output.
        stats: 'errors-only',
        hot: true,
        inline: true,
        contentBase: path.join(__dirname, "public"),
        publicPath: '/',
        // Parse host and port from env to allow customization.
        //
        // If you use Docker, Vagrant or Cloud9, set
        // host: options.host || '0.0.0.0';
        //
        // 0.0.0.0 is available to all network devices
        // unlike default `localhost`.
        host: '0.0.0.0', // Defaults to `localhost`
        port: 9000, // Defaults to 8080
    }
},{
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
}];