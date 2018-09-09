const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //抽离样式组件
const path = require('path')

module.exports = {
    entry:'./app/main.js',
    output:{
        // publicPath: 'dist/',                //表示资源的发布地址，当配置过该属性后，打包文件中所有通过相对路径引用的资源都会被配置的路径                                          所替换
        // path:path.join(__dirname),  
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
        },
        // {                                                   
       
        //     test: /\.css$/,                      //解析css文件
        //     use: [ 
        //         'style-loader', 
        //         'css-loader' 
        //     ]
        // },
        // {                                                   
       
        //     test: /\.scss$/,                    //解析scss文件
        //     use:[ 'style-loader', 
        //     'css-loader',
        //      'sass-loader' ]
        // },
        {                                                   
       
            test: /\.css$/,                      //解析css文件
            use: [ 
                MiniCssExtractPlugin.loader,
                'css-loader' 
            ]
        },
        {                                                   
       
            test: /\.scss$/,                    //解析scss文件
            use:[ 
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
            ]
        },

        {
　　　　　　test: /\.(png|jpg|gif)$/,
　　　　　　loader: 'url-loader',
            options:{
                limit:8192,
                name: 'img/[name].[hash:7].[ext]',
            }
        }
    ],
      
    },
    plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "[name].css",
          chunkFilename: "[id].css"
        })
    ],
}