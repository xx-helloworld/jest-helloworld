# jest + lerna + vue-jest-utils + vue

## 用 jest 测试 Vue 项目

1. helloworld
2. mock 测试
3. vue-ui 测试 纯 js 实现
4. 纯 vue 文件的 snapshots
5. 复杂 ui 测试

> 4，5 引入 vue-test-utils，几个 demo 从官网 example 上拔下来的
> `vue-jest` 需要 `4.0.0-beta` 才支持 `vue-loader`

Vue Test Utils 是 Vue.js 官方的单元测试实用工具库。主要实现了 vue 一些比较简单的测试功能，比如 mount，props()，html()，[vue 官网也有提](https://cn.vuejs.org/v2/guide/unit-testing.html);

## 实现功能

- [x] helloworld
- [x] mock 数据测试
- [x] vue ui 测试
- [x] snapshots 场景测试
- [ ] ES class modules
- [ ] shallowMount 测试
- [x] 复杂控件测试 demo
- [ ] webpack
- [ ] 如何监控 jest 测试
- [ ] 测试覆盖率

## 遇到的一些问题

`jsdom`不支持 windows 的方法

`jest`主要测试`react`，对 `Vue` 不是很友好，而其中的`jsx`语言都无法使用很多都只能用`createElement`的语法，`vue-utils-tests`也没有很好的 `api` 去支持

- [Vue Test Utils](https://vue-test-utils.vuejs.org/zh/)
- [Vue Test Utils example](https://github.com/vuejs/vue-test-utils-jest-example)
- [Jest 结合 Vue-test-utils 使用的初步实践](https://blog.csdn.net/duola8789/article/details/80434962)
