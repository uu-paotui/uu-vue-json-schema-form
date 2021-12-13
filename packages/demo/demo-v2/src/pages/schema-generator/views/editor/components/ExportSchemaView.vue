<!--
 * @Author: wendy
 * @LastEditors: wendy
 * @Date: 2021-12-08 11:44:34
 * @LastEditTime: 2021-12-08 16:37:06
 * @Description: 
-->
<template>
    <div style="text-align: right;">
        <el-button @click="toCopy">复制代码</el-button>
        <el-button
            type="primary"
            @click="$emit('toDemo')"
        >
            在 Playground 页验证
        </el-button>
        <!-- <JsonPrettyPrint :json-string="genCode"></JsonPrettyPrint> -->
        <!-- 换成编辑器 -->
        <CodeEditor
            v-model="schema"
            title="Form Schema"
            style="text-align: left;"
        ></CodeEditor>
    </div>
</template>

<script>
import JsonPrettyPrint from 'demo-common/components/JsonPerttyPrint.vue';
import CodeEditor from 'demo-common/components/CodeEditorV2';

export default {
    name: 'ExportSchemaView',
    components: {
        JsonPrettyPrint,
        CodeEditor
    },
    props: {
        genCode: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            genType: 1,
            schema: ''
        };
    },
    mounted() {
        const formatStr = jsonCode => JSON.stringify(jsonCode, null, 4);
        this.schema = formatStr(this.genCode);
    },
    methods: {
        toCopy() {
            const cPre = document.createElement('pre');
            cPre.innerHTML = this.schema;
            document.body.appendChild(cPre);
            cPre.setAttribute('contenteditable', 'true');
            cPre.focus();
            document.execCommand('selectAll', false, null);
            document.execCommand('copy');
            cPre.removeAttribute('contenteditable');
            cPre.style.display = 'none';
            document.body.removeChild(cPre);
            this.$message.success('复制成功');
        }
    }
};
</script>
