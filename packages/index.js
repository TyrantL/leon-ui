import Button from './button';

const version = '0.1.17';
const components = [Button];
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { Button };

export default {
  install,
  version,
  Button,
};
