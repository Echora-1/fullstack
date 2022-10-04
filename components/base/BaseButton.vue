<template>
  <button
    :class="[
      'base-button',
      {
        'base-button--transparent': transparent,
        'base-button--disabled': disabled,
        'base-button--loading': loading,
      },
    ]"
    :disabled="disabled"
    @click="click"
  >
    <slot></slot>
    <span class="loader-wrap">
      <span v-if="loading" class="loader"></span>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    transparent: {
      type: Boolean,
      default: false,
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

  methods: {
    click() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.base-button {
  background: linear-gradient(77.9deg, #0066ff -3.83%, #2ce0c5 110.36%);
  border-radius: 30px;
  cursor: pointer;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  display: flex;
  align-items: center;
  padding: 14px 32px;
  border: none;
  justify-content: center;
  position: relative;

  &--transparent {
    border: 1px solid rgba(22, 28, 47, 0.25);
    color: #161c2f;
    background: #f1f3f8;
  }

  &--disabled {
    opacity: 0.4;
  }

  &--loading {
    color: transparent;
    pointer-events: none;
  }
}

.loader-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.loader {
  width: 5px;
  height: 25px;
  border-radius: 4px;
  display: block;
  margin: 20px auto;
  position: relative;
  background: currentColor;
  color: #fff;
  box-sizing: border-box;
  animation: animloader 0.45s 0.3s linear infinite alternate;
}

.loader::after,
.loader::before {
  content: '';
  width: 5px;
  height: 25px;
  border-radius: 4px;
  background: currentColor;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12px;
  box-sizing: border-box;
  animation: animloader 0.45s 0.45s linear infinite alternate;
}
.loader::before {
  left: -12px;
  animation-delay: 0s;
}

@keyframes animloader {
  0% {
    height: 32px;
  }
  100% {
    height: 4px;
  }
}
</style>
