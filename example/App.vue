<template>
  <div id="app">
    <Button />
  </div>
</template>

<script>
import Button from '../packages/components/Button/Button.vue';

export default {
  name: 'App',
  components: {
    Button,
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
</style>
