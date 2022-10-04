<template>
  <button :class="{'active': active, 'dark-mode': isDarkTheme}">
  </button>
</template>

<script>
import getCurrentTheme from "@/mixins/getCurrentTheme";

export default {

  mixins: [getCurrentTheme],
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
}
</script>


<style lang='scss' scoped>
button {
  width: 32px;
  height: 26px;
  background: transparent;
  border: none;
  position: relative;
  cursor: pointer;

  @media(max-width: 767px) {
    width: 28px;
  }

  &::before,
  &::after {
    content: "";
    left: 0;
    position: absolute;
    height: 2px;
    width: 32px;
    transition: all 0.3s ease 0s;
    background: #414141;
    border-radius: 2px;

    @media(max-width: 767px) {
      width: 28px;
    }
  }

  &::before {
    top: 5px;
  }

  &::after {
    left: 16px;
    width: 16px;
    bottom: 5px;

    @media(max-width: 767px) {
      left: 14px;
      width: 14px;
    }
  }

}

.active {
  &::before {
    top: calc(50% - 2px);
    transform: rotate(45deg);
  }

  &::after {
    width: 32px;
    bottom: 50%;
    left: 0;
    transform: rotate(135deg);

    @media(max-width: 767px) {
      width: 28px;
    }
  }
}


.dark-mode {
  &::before,
  &::after,
  .line {
    background: #FFFFFF;
  }
}
</style>
