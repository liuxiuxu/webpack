const {merge}=require('webpack-merge');
const base=require('./webpack.base.config')
const OPtimizeCssPlugin=require('optimize-css-assets-webpack-plugin');
const UglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin');
module.exports=merge(base,{
    output:{
        publicPath:'./'
    },
    // 打包模式配置为生产环境
    mode:'production',
    optimization:{
        minimizer:[
            new OPtimizeCssPlugin(),
            new UglifyjsWebpackPlugin()
        ]
    }
})