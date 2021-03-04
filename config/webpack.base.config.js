const path=require('path');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
module.exports={
    // 入口文件
    entry:'./src/index.js',
    // 出口文件设置
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'[hash].js',
    },
    plugins:[
        // 每次重新打包都自动清除dist文件夹
        new CleanWebpackPlugin({
            path:"./dist"
        }),
        new HtmlWebpackPlugin({
            title:'webpack学习',
            inject:'body',
            template:path.resolve(__dirname,'../index.html'),
            filename:'index.html',
            favicon:path.resolve(__dirname,'../src/images/icon.ico')
        }),
        // 单独生成css文件夹
        new MiniCssExtractPlugin({
        // 配置生成的 css 文件的名称
        // 为了保证格式的统一, 所以前面加上一个 css 文件夹
            filename:'css/[hash].css'
        })
    ],
    // 模块配置，解析规则
    module:{
        rules:[
            // 解析图片
            {
                test:/\.(jpg|png|gif)$/,
                loader:'url-loader',
                options:{
                    limit:1024*26,
                    name:'images/[hash].[ext]',
                    esModule:false
                }
            },
            // 解析css
            {
                test:/\.css$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            publicPath:'../'
                        }
                    },
                    'css-loader'
                ]
            }
        ]
    }
    
}