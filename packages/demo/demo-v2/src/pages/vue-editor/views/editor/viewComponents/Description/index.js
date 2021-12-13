/*
 * @Author: wendy
 * @LastEditors: wendy
 * @Date: 2021-12-11 10:25:13
 * @LastEditTime: 2021-12-11 10:50:11
 * @Description: 
 */
import propsSchema from './propsSchema';
import uiSchema from './uiSchema';

const View = () => import('./View.vue');

export default {
  View,
  propsSchema,
  uiSchema
}