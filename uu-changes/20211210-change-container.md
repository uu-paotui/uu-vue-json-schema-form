<!--
 * @Author: wendy
 * @LastEditors: wendy
 * @Date: 2021-12-10 16:48:59
 * @LastEditTime: 2021-12-17 16:56:08
 * @Description: 变更日志
-->
## 替换导入/导出Schema承接容器
```js
<script src="//cdn.jsdelivr.net/npm/monaco-editor@0.20.0/min/vs/loader.js"></script>
<script>
    require.config({ paths: { 'vs': '//cdn.jsdelivr.net/npm/monaco-editor@0.20.0/min/vs' }});

    try {
        // https://github.com/microsoft/monaco-editor/blob/master/docs/integrate-amd-cross.md
        window.MonacoEnvironment = {
            getWorkerUrl: function(workerId, label) {
                const code = encodeURIComponent(`
                self.MonacoEnvironment = {
                  baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.20.0/min/'
                };
                importScripts('https://cdn.jsdelivr.net/npm/monaco-editor@0.20.0/min/vs/base/worker/workerMain.js');
            `);

                return 'data:text/javascript;charset=utf-8,' + code;
            }
        };
    } catch (e) {
        // nothing ....
    }
</script>
```
```js
<CodeEditor
    v-model="schema"
    title="Form Schema"
    style="text-align: left;"
></CodeEditor>
```