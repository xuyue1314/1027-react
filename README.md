准备工作

1.1 redux

1. 下载包 yarn add redux redux-thunk react-redux redux-devtools-extension
2. 定义 4 个模块（主要实现了 store 、reducers）
3. 在 index.js 模块使用 Provider

1.2 react-router-dom

1. 下载包 yarn add react-router-dom
2. 配置：在 App.jsx 配置 BrowserRouter
3. 定义 routes 路由配置文件

1.3 axios

1. 下载包 yarn add axios
2. 配置拦截器
3. 定义 api 文件夹

1.4 antd-mobile

1. 下载包 yarn add antd-mobile
2. 在 index.html 文件配置防止点击穿透 fastclick
3. 在 index.js 中引入了 antd-mobile 全局样式

1.5 viewport 适配

1. 下载包 yarn add @craco/craco postcss-px-to-viewport --dev
2. 修改 package.json 的 scripts 指令，将前三个 react-scripts 改成 craco
3. 定义配置文件（修改 webpack 配置）craco.config.js，里面设置适配的插件等功能
4. 在配置文件配置路径别名，同时通过 jsconfig.json 文件给路径别名进行代码提示
