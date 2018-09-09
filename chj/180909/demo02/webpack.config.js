// var path = require('path')
module.exports = {
    entry:'./app/main.js',
    output:{
        // path:path.join(__dirname),          //打包后的文件存放的地方
        filename:'bundle.js'                   //打包后输出文件的文件名
    },
    module:{
        rules:[{
            test:/\.js$/,                      //正则$表示结束的位置 ^是正则表达式匹配字符串开始位置
            exclude:/node_modules/,
            use: {
                loader: 'babel-loader',
                // options: {                  //可以不配置.babelrc 等着于该注释
                //     presets: ['@babel/preset-env'],
                // }
            }
        }]
    }
}