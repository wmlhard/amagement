const webpack = require("webpack");
const htmlWebpackPlugin=require("html-webpack-plugin");
const devServer = require("webpack-dev-server");
module.exports = {
    entry:"./main.js",
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            },
            {
                test:/\.scss$/,
                loader:"scss-loaeder!style-loader!css-loader"
            },
            {
                test:/\.js$/,
                loader:"babel-loader",
                query:{
                    presets:["es2015"]
                },
                exclude:/node_modules/
            },
            {
                test:/\.vue$/,
                loader:"vue-loader"
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf|woff2)\??.*$/i,
                loader: 'url-loader?limit=5000&name=[path][name].[ext]'
            }
        ]
    },
    output:{
        path:__dirname+"/dist/",
        filename:"handle.js"
    },
    devServer: {
        contentBase: "./",    //本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true             //实时刷新
  },
  watch:true

};
