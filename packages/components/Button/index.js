/**
 * @author: leon
 * @date: 2020/7/13 2:15 下午
 */
import Button from './Button.vue';

Button.install = function(Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
