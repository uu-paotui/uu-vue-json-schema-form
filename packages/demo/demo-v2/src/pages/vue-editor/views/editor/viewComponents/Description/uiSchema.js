/*
 * @Author: wendy
 * @LastEditors: wendy
 * @Date: 2021-12-11 10:48:55
 * @LastEditTime: 2021-12-13 17:09:51
 * @Description: 
 */
 export default {
  description: {
    'ui:options': {
      widgetListeners: {
        input(event) {
          console.log('ui textarea', event);
        }
      },
      getWidget(widgetVm) {
        console.log(widgetVm);
      },
      onChange(data) {
        console.log('change:', data);
      }
    }
  }
};
