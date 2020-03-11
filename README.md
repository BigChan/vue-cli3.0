# vue-cli

### 项目使用注意事项

- 必须在环境变量配置 API 请求地址
  ```
  VUE_APP_API_BASE_URL=API_REQUEST_URL
  ```

## 项目安装依赖

```
npm install
```

### 开发环境编译和热启动

```
npm run serve
```

### 生产环境编译和文件压缩构建

```
npm run build
```

### 测试

```
npm run test
```

### 整理和修复文件

```
npm run lint
```

### 单元测试

```
npm run test:unit
```

### 自定义配置

参考 [Configuration Reference](https://cli.vuejs.org/config/).

### 项目结构

```
.
├── docs                        // 文档集合
├── public                      // 公共目录
│   ├── favicon.ico             // 网站图标
│   └── index.html              // 模板文件
├── src
│   ├── assets                  // 资源
│   │   └── logo.png
│   ├── components              // 公共组件
│   │   ├── basic               // 基础组件
│   │   └── layouts             // 布局组件
│   ├── config                  // 项目配置
│   ├── core
│   │   ├── index.js            // 项目初始化执行
│   │   ├── logger.js           // 前端监控
│   │   ├── polyfills.js        // 兼容文件
│   │   ├── prototype.js        // Vue 实例方法
│   │   ├── styles.js           // 样式引入
│   │   └── ui.js               // UI 引入
│   ├── directives              // 指令
│   ├── filters                 // 过滤器
│   ├── mixins                  // 混入
│   ├── plugins                 // 插件
│   ├── router                  // 路由配置
│   │   └── routes              // 各个视图路由
│   │       ├── async.js        // 根据权限分配的动态路由
│   │       └── basic.js        // 基础路由
│   ├── services                // 接口请求
│   ├── store                   // 状态管理
│   │   ├── modules             // 各业务模块的局部状态管理
│   │   ├── types.js            // 根级别的 mutation types
│   │   └── index.js            // 状态管理入口
│   ├── styles                  // 样式
│   ├── utils                   // JS 工具
│   │   ├── consts              // 常量
│   │   ├── helpers             // 辅助函数
│   │   ├── request.js          // Http 请求
│   │   └── storage.js          // Storage 存储
│   ├── views                   // 视图
│   ├── App.vue                 // 页面入口
│   └── main.js                 // 程序入口
├── tests                       // 测试
├── .editorconfig               // VS Code 配置文件
├── .env                        // 开发环境变量配置
├── .env.dev                    // 开发环境变量配置
├── .env.pre                    // 预生产环境变量配置
├── .env.prod                   // 生成环境变量配置
├── .env.test                   // 测试环境变量配置
├── .eslintrc.js                // Eslint 配置文件
├── .gitignore                  // Git 忽略文件
├── .npmrc                      // npm 配置文件
├── .postcssrc.js               // PostCSS 配置文件
├── .prettierrc                 // Prettier 配置文件
├── babel.config.js             // Babel 配置文件
├── Dockerfile                  // Docker 配置文件
├── jest.config.js              // jest 配置文件
├── jsconfig.json               // VS Code 的JS配置文件
├── nginx.conf                  // Nginx 配置文件
├── package-lock.json
├── package.json
├── README.md
└── vue.config.js               // vue cli 配置文件
```

### 风格规范

- 本项目代码遵循 [ESLint](https://eslint.org/) + Airbnb 编码规则
- [Vue 组件开发规范](https://cn.vuejs.org/v2/style-guide)，强调一点是不能存在隐性的父子组件通信
- [Vuex 状态管理编写规范](./docs/store.md)
- 文件夹命名规范
  - components 下组件的文件夹命名使用大驼峰(PascalBase)命名（例如：PersonId）
  - 除了 components 下组件的文件夹之外，其余文件夹使用 KebabCase 命名（例如：person-id）
- 项目中组件
  - 页面子组件则需要在当前页面目录中开发，除非通用组件
- 超过 3 次包含 3 次使用的 directive，提取写入 src/directives，其余在局部使用，或者使用方法、或者组件化解决
- 超过 3 次包含 3 次使用的 filter，提取写入 src/filters，其余在局部使用，或者使用方法、或者组件化解决
- 所有的混入写入 src/mixins
- 非 NPM 安装的插件写入 src/plugins
- 全局使用的插件以及项目所需的初始化执行代码写入 src/core/index.js
