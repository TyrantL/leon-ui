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
  name: 'Button',
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

<style scoped lang="less">
.leon-button {
  .font;
  .center;
  padding: 0 12px;
  height: 32px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background: #fff;
  user-select: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px;
  outline: 0;
  &:hover {
    color: #40a9ff;
    border-color: #40a9ff;
  }
}
.leon-button--primary {
  color: #fff;
  background: #1890ff;
  border-color: #1890ff;
  &:hover {
    color: #fff;
    background: #40a9ff;
    border-color: #40a9ff;
  }
}
.leon-button--dashed {
  border-style: dashed;
}
.leon-button--danger {
  color: #fff;
  background: #ff4d4f;
  border-color: #ff4d4f;
  &:hover {
    color: #fff;
    background-color: #ff7875;
    border-color: #ff7875;
  }
}
.leon-button-disabled {
  cursor: not-allowed;
  color: #999;
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  &:hover {
    color: #999;
    background-color: #f5f5f5;
    border-color: #d9d9d9;
  }
}
</style>
