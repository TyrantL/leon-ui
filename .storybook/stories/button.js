/**
 * @author: leon
 * @date: 2020/7/14 5:07 下午
 */
import Vue from 'vue';
import Button from '../../packages/button';
import '../../packages/style.less';
Vue.use(Button);

export default {title: 'Button'};

export const type = () => ({
  components: { Button },
  template: `<div>
    <l-button type="primary">rounded</l-button>
    <l-button type="default">default</l-button>
    <l-button type="danger">danger</l-button>
    <l-button type="dashed">dashed</l-button>
  </div>`
});

export const disabled = () => ({
  components: { Button },
  template: `<div>
    <l-button type="primary" disabled>rounded</l-button>
    <l-button type="default" disabled>default</l-button>
    <l-button type="danger" disabled>danger</l-button>
    <l-button type="dashed" disabled>dashed</l-button>
  </div>`
});
