<!--
 * @Author: wendy
 * @LastEditors: wendy
 * @Date: 2021-12-07 14:44:24
 * @LastEditTime: 2021-12-08 17:28:12
 * @Description: 
-->
<template>
  <div>
    <div class="item">
      <span>VUE版本：</span>
      <el-select v-model="version" @change="handleChangeVersion">
        <el-option value="vue2" label="vue2"></el-option>
        <el-option value="vue3" label="vue3"></el-option>
      </el-select>
    </div>
    <div class="item">
      <span>UI库：</span>
      <el-select v-model="uiType">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="item">
      <span>文件名称：</span>
      <el-input v-model="fileName" style="width: 200px"></el-input>
    </div>
    <p style="margin-top: 20px; text-align: right">
      <el-button
        type="primary"
        @click="handleExportVueFile"
      >
        导出
      </el-button>
    </p>
  </div>
</template>

<script>
import { saveAs } from 'file-saver';
import {vueTemplate, vueScript, cssStyle} from './templete';

export default {
  name: 'ExportVueFile',
  components: {},
  props: {
    genCode: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      fileName: 'demo.vue',
      version: 'vue2',
      uiType: 'elementUi',
      options: [{
        label: 'elementUi',
        value: 'elementUi'
      }, {
        label: 'iview3',
        value: 'iview3'
      }]
    }
  },
  methods: {
    handleChangeVersion(val) {
      if (val === 'vue3') {
        this.options = [{
          label: 'elementPlus',
          value: 'elementPlus'
        }, {
          label: 'antdv',
          value: 'antdv'
        }]
        this.uiType = 'elementPlus'
      } else {
        this.options = [{
        label: 'elementUi',
        value: 'elementUi'
      }, {
        label: 'iview3',
        value: 'iview3'
      }]
        this.uiType = 'elementUi'
      }
    },
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
    },
  }
}
</script>
<style>
.item {
  margin-bottom: 15px;
  > span {
    display: inline-block;
    width: 100px;
    text-align: right;
  }
}
</style>