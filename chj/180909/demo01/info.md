# webpack

webpack4 新增mode模式

development 开发环境不压缩代码

production 生成环境压缩代码

其实就是利用uglifyjs-webpack-plugin插件
如果你们demo01的package mode 改为production
会发现会自动安装uglifyjs-webpack-plugin 模块