# 配置es6语法

webpack4 新增mode模式

### babel-core 如果要用babel7  @babel/core

babel-core 的作用在于提供一系列api。这便是说，当webpack使用babel-loader处理文件时，babel-loader实际上调用了babel-core的api，因此也必须安装babel-core

### babel-loader   如果用babel7   babel-loader 要装8 详细见相关地址

作为webpack的loader的一种，作用同其他loader一样，实现对特定文件类型的处理。

## webpack官方文档中指出了loader的作用

loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack的打包能力，对它们进行处理。

### babel-preset-env   如果用babel7      @babel/preset-env

的作用是告诉babel使用哪种转码规则进行文件处理。事实上，babel有几种规则都可以实现对ES6语法的转码，如babel-preset-es2015、babel-preset-latest、babel-preset-env，不过官方现已建议采用babel-preset-env，本文也将采用babel-preset-env，你可以通过官网了解几种规则的区别。同样在命令行中定位到项目根目录，输入以下指令进行安装： 

相关地址

https://github.com/babel/babel-loader

https://segmentfault.com/a/1190000012747905