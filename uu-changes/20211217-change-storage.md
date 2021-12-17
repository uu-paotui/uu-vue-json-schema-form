<!--
 * @Author: wendy
 * @LastEditors: wendy
 * @Date: 2021-12-17 16:21:53
 * @LastEditTime: 2021-12-17 17:54:24
 * @Description: 变更日志
-->
## 添加离线存储
```js
import localforage from 'localforage';
```
```js
  /**
   * 改变原始传递schema方式
   * 原方式：拼在url上面（缺点：url参数有长度限制）
   * 现方式：本地离线存储（大小不受限制，支持回调，存储格式多样化）
   */
  if (JSON.stringify(codeObj.schema.properties) === '{}') {
      // 兼容Test模板
      codeObj = {};
  }
  localforage.setItem('Test', codeObj).then(() => {
      openNewPage('/index.html#/demo?type=Test', '_specialViewForm');
  })
```
## Playground
```js
  initData() {
    // eslint-disable-next-line no-unused-vars
    // const { type, ui, ...queryParams } = this.$route.query;
    // let queryParamsObj = {};
    localforage.getItem(this.curType).then(value => {
        let genCode = value || {};
        // 还原 labelWidth
        if (genCode.formProps && genCode.formProps.labelWidth) {
            genCode.formProps.labelWidth = parseFloat(genCode.formProps.labelWidth) / 4;
        }

        const defaultState = this.getDefaultSchemaMap();
        const formProps = {
            ...defaultState.formProps,
            ...(genCode.formProps || {})
        };

        Object.assign(this, defaultState, Object.assign(schemaTypes[this.curType], genCode, {
            formProps
        }));
    })
    try {
        // queryParamsObj = Object.entries(queryParams).reduce((preVal, [key, value]) => {
        //     preVal[key] = JSON.parse(String(value));
        //     return preVal;
        // }, {});
    } catch (e) {
        // nothing ...
    }
  }
```
## 切换UI
```js
handleUiChange(value) {
    // const formatStr = jsonCode => JSON.stringify(JSON.parse(jsonCode));

    this.$router.replace({
        query: {
            ...this.$route.query,
            ui: value,
            // schema: formatStr(this.curSchemaCode),
            // formData: formatStr(this.curFormDataCode),
            // uiSchema: formatStr(this.curUiSchemaCode),
            // errorSchema: formatStr(this.curErrorSchemaCode),
            // formFooter: formatStr(JSON.stringify(this.trueFormFooter)),
            // formProps: formatStr(JSON.stringify(this.trueFormProps)),
        }
    });
    localforage.setItem(this.curType, {
        schema: JSON.parse(this.curSchemaCode),
        formData: JSON.parse(this.curFormDataCode),
        uiSchema: JSON.parse(this.curUiSchemaCode),
        errorSchema: JSON.parse(this.curErrorSchemaCode),
        formFooter: this.trueFormFooter,
        formProps: this.trueFormProps,
    }).then(() => {
        window.location.reload();
    })
}
```