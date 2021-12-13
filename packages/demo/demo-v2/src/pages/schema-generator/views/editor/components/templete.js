/*
 * @Author: wendy
 * @LastEditors: wendy
 * @Date: 2021-12-07 14:36:13
 * @LastEditTime: 2021-12-08 17:48:46
 * @Description: 
 */
export function vueTemplate(version) {
  return `<template>
  <div>
    <VueForm
      v-model="formData"
      :schema="schema"
      :ui-schema="uiSchema"
      :form-props="formProps"
      :form-footer="formFooter"
      ${version === 'vue3' ? '@submit="handleSubmit"' : '@on-submit="handleSubmit"'}
      ${version === 'vue3' ? '@cancel="handleCancel"' : '@on-cancel="handleCancel"'}
    />
  </div>
</template>`
}

function makeUpJsImport(version, uiType) {
  const tips = '// 需要您在当前项目下安装这个库';
  const MAP = {
    'vue2': {
      'elementUi': `import VueForm from '@lljj/vue-json-schema-form'; ${tips}`,
      'iview3': `import VueForm from '@lljj/vue2-form-iview3'; ${tips}`
    },
    'vue3': {
      'elementPlus': `import { defineComponent, reactive, toRefs } from 'vue';
  import VueForm from '@lljj/vue3-form-element'; ${tips}`,
      'antdv': `import { defineComponent, reactive, toRefs } from 'vue';
  import VueForm from '@lljj/vue3-form-ant'; ${tips}`
    }
  }
  return MAP[version][uiType];
}

function makeUpJsBody(version, genCode) {
  const MAP = {
    'vue2': `
  export default {
    components: { VueForm },
    data() {
      return {
        formData: {},
        schema: ${JSON.stringify(genCode?.schema) || {}},
        uiSchema: ${JSON.stringify(genCode?.uiSchema) || {}},
        formProps: ${JSON.stringify(genCode?.formProps) || {}},
        formFooter: ${JSON.stringify(genCode?.formFooter) || {}}
      }
    },
    methods: {
      handleSubmit(values) {
        console.log('-----values------', values)
      },
      handleCancel() {
        console.log('您点击了取消')
      }
    }
  }`,
    'vue3': `
  export default defineComponent({
    components: { VueForm },
    setup() {
      let formData = reactive({});
      const formSchema = reactive(${JSON.stringify(genCode)});
  
      const handleSubmit = (values) => {
        console.log('-----values------', values)
      }
  
      const handleCancel = () => {
        console.log('您点击了取消')
      }
  
      return {
        formData,
        ...toRefs(formSchema),
        handleSubmit,
        handleCancel
      }
    }
  })`
  }
  return MAP[version];
}

export function vueScript(str) {
  const {version, uiType, genCode} = str

  return `
<script>
  ${makeUpJsImport(version, uiType)}
  ${makeUpJsBody(version, genCode)}
</script>`
}

export function cssStyle() {
  return `
<style>
  
</style>`
}
