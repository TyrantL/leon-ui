<template>
  <button
    class="leon-button"
    :class="`leon-button--${type} ${disabled ? 'leon-button-disabled' : ''}`"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'l-button',
  props: {
    type: {
      type: String,
      default: 'default', // default 、primary 、danger 、dashed
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped lang="less"></style>
