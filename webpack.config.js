const path=require("path")
const { VueLoaderPlugin }=require("vue-loader")
const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports={
    entry: ['babel-polyfill',path.resolve(__dirname,'./src/main.js')],
    output: {
        filename: "bundle[hash:5].js",
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
                    'style-loader',
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
    plugins: [
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
        })
    ],
    devServer: {
        contentBase: "./dist",
        hot: true,
        port: '8080',
        host: '0.0.0.0',
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            '/': 'http://192.168.30.27:8001'
        }
    }
}