<!--
 * @Author: wendy
 * @LastEditors: wendy
 * @Date: 2021-12-11 10:13:28
 * @LastEditTime: 2021-12-11 11:29:33
 * @Description: 描述文本
-->
<template>
  <div class="descriptionBox">
    <div
      v-html="formData.description"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: {
    formData: {
        type: Object,
        default: () => ({})
    }
  }
}
</script>

<style scoped>
.descriptionBox {
  background-color: #FFF;
  padding: 10px 15px;
  font-size: 16px;
  color: #ccc;
  line-height: 20px;
}
</style>