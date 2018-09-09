const path = require('path')

module.exports = {
    // entry:path.join(__dirname,'/app/main.js'),
    entry:{
        main1:path.join(__dirname,'/app/main1.js'),
        main2:path.join(__dirname,'/app/main2.js'),
    },
    output:{
        // path:path.join(__dirname),          //打包后的文件存放的地方
        filename:'[name].bundle.js'                        //打包后输出文件的文件名
    },
   
}