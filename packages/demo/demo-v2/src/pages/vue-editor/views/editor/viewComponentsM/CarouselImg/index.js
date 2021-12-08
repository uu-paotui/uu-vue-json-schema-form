/**
 * Created by Liu.Jun on 2019/12/4 15:06.
 */

import propsSchema from './CarouselImg.json';
import uiSchema from './uiSchema.js';

const View = () => import('./View.vue');

export default {
    View,
    propsSchema,
    uiSchema
};
