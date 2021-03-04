const {merge}=require('webpack-merge');
const base=require('./webpack.base.config')
module.exports=merge(base,{
    output:{
        publicPath:'http://localhost:8888/'
    },
    // 打包模式配置为开发环境
    mode:'development',
    devServer:{
        host:'localhost',
        port:8888,
        hot:true
    }
})