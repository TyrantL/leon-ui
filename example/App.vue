<template>
  <div id="app">
    <Button @click="handleClick">default</Button>
    <Button type="primary">primary</Button>
    <Button disabled type="dashed">dashed</Button>
    <Button type="danger">danger</Button>
  </div>
</template>

<script>
import Button from '../packages/components/Button/Button.vue';

export default {
  name: 'App',
  components: {
    Button,
  },
  methods: {
    handleClick() {
      console.log(1);
    },
  },
};
</script>

<style lang="less">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
}
</style>
