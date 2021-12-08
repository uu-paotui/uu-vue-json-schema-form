# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.10.0](https://github.com/lljj-x/vue-json-schema-form/compare/v1.9.5...v1.10.0) (2021-11-28)


### Features

* **lib:** 添加 $$uiFormRef 属性，可在mounted 之直接访问子组件实例 ([08c6c4f](https://github.com/lljj-x/vue-json-schema-form/commit/08c6c4f2d247b4881e88fa380de8980c31cc5cd7)), closes [#127](https://github.com/lljj-x/vue-json-schema-form/issues/127)





## [1.9.5](https://github.com/lljj-x/vue-json-schema-form/compare/v1.9.4...v1.9.5) (2021-11-21)


### Bug Fixes

* **lib:** 修复inline 布局样式问题 ([65a7143](https://github.com/lljj-x/vue-json-schema-form/commit/65a7143fc19105f9096afc24a25107c0ef27ac5f)), closes [#122](https://github.com/lljj-x/vue-json-schema-form/issues/122)





## [1.9.4](https://github.com/lljj-x/vue-json-schema-form/compare/v1.9.3...v1.9.4) (2021-11-02)

**Note:** Version bump only for package @lljj/vue2-form-core





## [1.9.3](https://github.com/lljj-x/vue-json-schema-form/compare/v1.9.2...v1.9.3) (2021-10-10)

**Note:** Version bump only for package @lljj/vue2-form-core





## [1.9.2](https://github.com/lljj-x/vue-json-schema-form/compare/v1.9.1...v1.9.2) (2021-09-25)


### Bug Fixes

* **lib:** 修复anyOf嵌套object 可能丢失部分校验规则的问题 ([5c06294](https://github.com/lljj-x/vue-json-schema-form/commit/5c06294d9a9c978bda1c3724710cfd4ba478af5b))





## [1.9.1](https://github.com/lljj-x/vue-json-schema-form/compare/v1.9.0...v1.9.1) (2021-09-22)


### Bug Fixes

* **anyof:** 新值为object类型直接覆盖 ([d2f9791](https://github.com/lljj-x/vue-json-schema-form/commit/d2f9791ce7d35228edd07257049607177a95fc84)), closes [#77](https://github.com/lljj-x/vue-json-schema-form/issues/77)
* 修复select组件无法实时校验 ([85d9545](https://github.com/lljj-x/vue-json-schema-form/commit/85d95451b56b9d985ca7094118fbfaca87342322)), closes [#105](https://github.com/lljj-x/vue-json-schema-form/issues/105)





# [1.9.0](https://github.com/lljj-x/vue-json-schema-form/compare/v1.7.0...v1.9.0) (2021-09-06)


### Features

* **vue2:** vue2 添加 widgetListeners 配置 ([50348c2](https://github.com/lljj-x/vue-json-schema-form/commit/50348c27e72813ea16fdcfcea46e6450ccf06018)), closes [#45](https://github.com/lljj-x/vue-json-schema-form/issues/45)
* **vue2-core:** 暴露 okBtnProps ([c832a07](https://github.com/lljj-x/vue-json-schema-form/commit/c832a07eab0d4174d62da42a739bfa7e1f69fa44))





# [1.8.0](https://github.com/lljj-x/vue-json-schema-form/compare/v1.7.0...v1.8.0) (2021-09-06)


### Features

* **vue2:** vue2 添加 widgetListeners 配置 ([50348c2](https://github.com/lljj-x/vue-json-schema-form/commit/50348c27e72813ea16fdcfcea46e6450ccf06018)), closes [#45](https://github.com/lljj-x/vue-json-schema-form/issues/45)
* **vue2-core:** 暴露 okBtnProps ([c832a07](https://github.com/lljj-x/vue-json-schema-form/commit/c832a07eab0d4174d62da42a739bfa7e1f69fa44))





# [1.7.0](https://github.com/lljj-x/vue-json-schema-form/compare/v1.6.4...v1.7.0) (2021-08-29)


### Features

* **lib:** 支持配置 slots ([27f1501](https://github.com/lljj-x/vue-json-schema-form/commit/27f1501eda01eabd4a723656be56904e9cb0f069)), closes [#45](https://github.com/lljj-x/vue-json-schema-form/issues/45)





## [1.6.3](https://github.com/lljj-x/vue-json-schema-form/compare/v1.6.2...v1.6.3) (2021-07-12)

**Note:** Version bump only for package @lljj/vue2-form-core





## [1.6.2](https://github.com/lljj-x/vue-json-schema-form/compare/v1.6.1...v1.6.2) (2021-05-31)

**Note:** Version bump only for package @lljj/vue2-form-core





# [1.6.0](https://github.com/lljj-x/vue-json-schema-form/compare/v1.5.0...v1.6.0) (2021-05-22)


### Features

* **lib:** form-mounted event 添加formData 参数 ([c54202c](https://github.com/lljj-x/vue-json-schema-form/commit/c54202c27304add9636a7062c05c80c60fc200a6))





# [1.5.0](https://github.com/lljj-x/vue-json-schema-form/compare/v1.4.0...v1.5.0) (2021-05-09)


### Features

* **lib:** 优化anyOf切换选项值的复用，修复vue3 anyOf无法切换选项 ([6159160](https://github.com/lljj-x/vue-json-schema-form/commit/6159160d1727165e706343187aca129360dc011f))





# [1.4.0](https://github.com/lljj-x/vue-json-schema-form/compare/v1.3.0...v1.4.0) (2021-04-22)


### Features

* **lib:** 调整 widget onChange prop参数格式，添加 formData参数 ([4c441fc](https://github.com/lljj-x/vue-json-schema-form/commit/4c441fce239ade40b10a42bf361c3ee920a044ed)), closes [#45](https://github.com/lljj-x/vue-json-schema-form/issues/45)





# [1.3.0](https://github.com/lljj-x/vue-json-schema-form/compare/v1.2.1...v1.3.0) (2021-04-15)


### Features

* **core:** widget 节点直接配置onChange ([2d2264b](https://github.com/lljj-x/vue-json-schema-form/commit/2d2264b004c3b6586e225c563bf03ca52fc5e53a))





## [1.2.1](https://github.com/lljj-x/vue-json-schema-form/compare/v1.2.0...v1.2.1) (2021-04-11)

**Note:** Version bump only for package @lljj/vue2-form-core





# [1.2.0](https://github.com/lljj-x/vue-json-schema-form/compare/v1.1.3...v1.2.0) (2021-03-30)


### Features

* **lib:** 添加 fallback-label 参数 ([cd2d8c3](https://github.com/lljj-x/vue-json-schema-form/commit/cd2d8c3ed72b9bc03e44eb5b86eb1b18fe67c34c)), closes [#45](https://github.com/lljj-x/vue-json-schema-form/issues/45)





## [1.1.3](https://github.com/lljj-x/vue-json-schema-form/compare/v1.1.2...v1.1.3) (2021-03-18)

**Note:** Version bump only for package @lljj/vue2-form-core





## [1.1.2](https://github.com/lljj-x/vue-json-schema-form/compare/v1.1.1...v1.1.2) (2021-03-07)


### Bug Fixes

* **vue3-antd:** 修复form label 双冒号问题 ([5b4f16c](https://github.com/lljj-x/vue-json-schema-form/commit/5b4f16c3c1a4f4b784c2fd5c1fbe7eec40cf8d7b)), closes [#46](https://github.com/lljj-x/vue-json-schema-form/issues/46)





# [1.1.0](https://github.com/lljj-x/vue-json-schema-form/compare/v1.0.2...v1.1.0) (2021-03-06)


### Features

* **vue3-ant:** 更新初始化 ([71a2810](https://github.com/lljj-x/vue-json-schema-form/commit/71a281045af11f215333050396aa546dd5e78b88)), closes [#27](https://github.com/lljj-x/vue-json-schema-form/issues/27) [#27](https://github.com/lljj-x/vue-json-schema-form/issues/27) [#27](https://github.com/lljj-x/vue-json-schema-form/issues/27) [#40](https://github.com/lljj-x/vue-json-schema-form/issues/40)





## [1.0.2](https://github.com/lljj-x/vue-json-schema-form/compare/v1.0.1...v1.0.2) (2021-01-31)


### Bug Fixes

* **style:** 修复p标签等自带边距导致的样式问题  ([7b7e43e](https://github.com/lljj-x/vue-json-schema-form/commit/7b7e43eaa06c14a436b34c38d6d69aad27d67512))





## [0.6.1](https://github.com/lljj-x/vue-json-schema-form/compare/v0.6.0...v0.6.1) (2021-01-19)

**Note:** Version bump only for package @lljj/vue2-form-core





# [0.6.0](https://github.com/lljj-x/vue-json-schema-form/compare/v0.5.0...v0.6.0) (2021-01-19)


### Bug Fixes

* **lib:** 修复 anyOf 类型，编辑时不能匹配正确选项 ([d747722](https://github.com/lljj-x/vue-json-schema-form/commit/d7477227d004e47c2b186c3eb956e4c83d7077ad)), closes [#31](https://github.com/lljj-x/vue-json-schema-form/issues/31)
* **lib:** 解决打包后包含es6代码问题 ([f03352e](https://github.com/lljj-x/vue-json-schema-form/commit/f03352eb129c45963ad41e3e91eebe102c303913)), closes [#29](https://github.com/lljj-x/vue-json-schema-form/issues/29)


### Features

* 适配 iview3 ([d4ee166](https://github.com/lljj-x/vue-json-schema-form/commit/d4ee166a7dd71bb9a840525f4eb15c4fdc97f11d))
