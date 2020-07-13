/**
 * @author: leon
 * @date: 2020/7/13 2:24 下午
 */
import Button from './Button/Button.vue';

const components = [Button];

const install = Vue => {
  components.forEach(Component => {
    Vue.install(Component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// eslint-disable-next-line import/prefer-default-export
export { Button };

export default { install };
