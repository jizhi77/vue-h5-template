# vue-h5-template

> Vue 移动端快速开发模板

## Feature

- 有赞 [Vant](https://youzan.github.io/vant/#/zh-CN/) 组件库
- [ ] robots.txt


## Development

### 开发模式和环境变量

#### 模式

- npm script 命令涉及的模式有 3 种
	- production：vue-cli-service build 和 vue-cli-service test:e2e
	- test：vue-cli-service test:unit
	- development：vue-cli-service serve
- 可以自定义模式，eg：vue-cli-service build --mode staging

#### 环境变量

- 环境变量配置文件读取优先级：`.env > .env.local >  .env.[mode] > .env.[mode].local`
- 后读取的同名变量覆盖先读取的

eg：

```bash
// .env
VUE_APP_XX=env


// .env.local
VUE_APP_XX=encLocal


// .env.staging
VUE_APP_XX=envStaging

// .env.staging.local
VUE_APP_XX=envStagingLocal

```

> 如上，假如同时存在 `.env`、`.env.local`、`.env.[mode]`、`.env.[mode].local` 四种环境变量配置文件，那么最终输出值`VUE_APP_XX=envStagingLocal`


#### NODE_ENV

详细介绍可以查看：[NODE_ENV到底是个什么玩意？？](https://www.jianshu.com/p/83e8909fc1cd)


