<template>
  <button :class="['button-drawer', {'button-drawer--active': active} ]" @click="emitClick">
  </button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    emitClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.button-drawer {
  position: relative;
  width: 24px;
  height: 24px;


  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 3px;
    background: #2F385E;
    border-radius: 4px;
  }

  &::before {
    top: 6px;
    left: 0;
    width: 24px;
  }

  &::after {
    width: 12px;
    right: 0;
    bottom: 6px;
    transition: all 0.2s;
  }

  &--active {
    &::after {
      right: calc(100% - 12px);
    }
  }
}
</style>
