<!--
 * @Author: wendy
 * @LastEditors: wendy
 * @Date: 2021-12-13 16:34:17
 * @LastEditTime: 2021-12-17 16:58:31
 * @Description: 变更日志
-->
## 添加导出文件功能
```js
  <el-button
      icon="el-icon-download"
      type="primary"
      @click="handleExportVue"
  >
      导出vue文件
  </el-button>
```
新增文件：demo-v2/src/pages/schema-generator/views/editor/components/ExportVueFile.vue

```js
  // 设计器内
  handleExportVueFile() {
    const html = `${vueTemplate(this.version)}
      ${vueScript({
        version: this.version,
        uiType: this.uiType,
        genCode: this.genCode
      })}
      ${cssStyle()}
    `
    const blob = new Blob([html], { type: 'text/plain;charset=utf-8' })
    saveAs(blob, this.fileName)
  }
  // playground内
  handleExportVueFile() {
    const formatStr = jsonCode => JSON.parse(jsonCode);
    const genCode = {
        schema: formatStr(this.curSchemaCode),
        uiSchema: formatStr(this.curUiSchemaCode),
        formFooter: formatStr(JSON.stringify(this.trueFormFooter)),
        formProps: formatStr(JSON.stringify(this.trueFormProps))
    }
    const UIType = {
        'VueAntForm': 'antdv',
        'VueElementForm': 'elementPlus'
    }
    const html = `${vueTemplate('vue3')}
        ${vueScript({
        version: 'vue3',
        uiType: UIType[this.curVueForm],
        genCode,
        })}
        ${cssStyle()}
    `
    const blob = new Blob([html], { type: 'text/plain;charset=utf-8' })
    saveAs(blob, 'demo.vue')
  }
```
## 导出vue文件模板
```text
demo-v2/src/pages/schema-generator/views/editor/components/templete.js
```

## 区分vue版本以及UI库
```js
vue2.x: ElementUI     iView3
vue3.x: ElementPlus   antdV
```