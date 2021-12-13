/*
 * @Author: wendy
 * @LastEditors: wendy
 * @Date: 2021-12-11 10:18:59
 * @LastEditTime: 2021-12-11 10:24:41
 * @Description: 
 */
export default {
  id: 'Description',
  title: '描述文本输入组件',
  description: '描述文本输入组件，用于在页面配置一条描述文字信息',
  type: 'object',
  required: ['description'],
  properties: {
    description: {
      title: '描述',
      type: 'string',
      'ui:options': {
        placeholder: '输入你的内容',
        type: 'textarea',
        required: '必须输入描述文字内容'
      }
    }
  }
};
