# 配置es6语法

## 配置css
css-loader: 加载.css文件
style-loader:使用<style>将css-loader内部样式注入到我们的HTML页面

## 配置sass
sass-loader  加载.scss文件
node-sass    是解析sass和scss=>css的基础，webpack中的sass-loader依赖于node-sass

安装好的node-sass 最好要npm rebuild node-sass 比较好，有时候更新webpack 或者npm .scss 的文件编译有问题就是node-sass的问题


## 抽离样式文件
webapck4以下的 常用 extract-text-webpack-plugin 但是该组件暂不支持4+版本

推荐使用 mini-css-extract-plugin 插件

### 配置图片地址相关loader
url-loader 和file-loader 都要装
但是url-loader 是对file-loader的分装，config 只要配置url-loader 几号


相关地址

暂时成功css图片的路径配置，js的路径配置惜败，待我之后再好好研究 

https://blog.csdn.net/mrhaoxiaojun/article/details/78920107
url-loader 和file-loader
https://blog.csdn.net/qq_29676303/article/details/79905889