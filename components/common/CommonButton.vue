<template>
  <button
    :class="[
      'common-button',
      {
        'common-button--transparent': transparent,
        'common-button--secondary': secondary,
        'common-button--disabled': disabled,
      },
    ]"
    :disabled="disabled"
    @click="click"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    transparent: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    click() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.common-button {
  background: #0066ff;
  border-radius: 8px;
  cursor: pointer;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  display: flex;
  align-items: center;
  padding: 6px 24px;
  justify-content: center;
  border: 1px solid #0066ff;

  &--transparent {
    border: 1px solid #00002f;
    color: #2f385e;
    background: #ffffff;
  }

  &--secondary {
    color: #0066FF;
    border: 1px solid #0066FF0D;
    background: #0066FF26;
  }

  &--disabled {
    opacity: 0.4;
  }
}
</style>
