const path=require("path")
const { VueLoaderPlugin } = require("vue-loader")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const isDev = process.argv.filter(h=>/development/.test(h)).length?true:false
// console.log(isDev)

module.exports={
    entry: {
        entry: ['babel-polyfill',path.resolve(__dirname,'./src/main.js')],
        // index1: path.resolve(__dirname,'./src/index1.js'),
        // index2: path.resolve(__dirname,'./src/index2.js'),
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname,"dist")
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
        }
    },
    module: {
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },{
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ['transform-vue-jsx']
                    }
                }]
            },{
                test: /\.(scss|css)$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                require('autoprefixer')()
                            ]
                        }
                    },
                    "sass-loader"
                ]
            },{
                test: /\.(png|jpg|gif|svg|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit:10240,
                            name: 'has-images/[name]-[hash:5].[ext]'
                        }
                    }
                ]
            },{
                test: /\.(woff|woff2|eot|ttf|otf)$/,//字体处理
                loader: 'url-loader'
            }
        ]
    },
    optimization: {
        sideEffects: true,
        runtimeChunk:true,
        // runtimeChunk: {
        //     name: entrypoint => `runtime~${entrypoint.name}`
        // },
        splitChunks: {
            chunks:'all',
            maxInitialRequests:3,
            cacheGroups: {
                // commons: {
                //     chunks: "initial",
                //     name:'commons',
                //     minChunks: 2,
                // },
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    priority: 10,
                    enforce: true //优先处理
                }
            }
        },
        moduleIds: 'named'
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'styles/[name].css',
            chunkFilename: 'styles/[name].css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
            // chunks:['index']
        }),
       
    ],
    devServer: {
        contentBase: "./dist",
        hot: true,
        port: '8080',
        host: '0.0.0.0',
        overlay: {
            warnings: true,
            errors: true
        }
    }
}