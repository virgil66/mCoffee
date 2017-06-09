#项目目录：
        -> index.html

#缓存配置文件:
        -> manifest.appcache

#静态资源目录:
        -> assets
        -> /css (已压缩)
        -> /images
        -> /script

#全局js:
        assets/script/core.min.js
源码目录: src/script/core
相关文件:
        -> /flexible.js 淘宝移动端自适应解决方案
        -> /ready.js 通知andriod/ios客户端页面加载完
        -> /zepto.js 移动端事件处理

#全局css:
        assets/script/base.min.css
源码目录: src/less/base
相关文件: 详见src/less/base/base.less注释

#其他页面js依赖:
       -> 首页（main.html) riot.js(MVP)
       -> 借款 (debit.html) riot.js tips.min.js(提示)
       -> 提前还清 (preRepay.html) riot.js
       -> 还款详情 (rePayDetail.html) riot.js
       -> 查看详单 （debitDetailOrder.html） riot.js

#推荐本地css编译工具:
       gulp：运行 gulp,启用实时编译
