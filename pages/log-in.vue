<template>
  <div class="log-in">
    <login-form />
  </div>
</template>

<script>
import LoginForm from "@/components/forms/LoginForm";
export default {
  components: {LoginForm},
  layout: 'empty',
}
</script>

<style lang="scss" scoped>
.log-in {
  position: relative;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

/*  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    min-width: 1440px;
    height: 393px;
    top: 172px;
    right: 0;
    background-image: url("../assets/images/main-bg-2.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 393px;
    pointer-events: unset;
  }

  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    min-width: 1440px;
    height: 393px;
    top: 320px;
    right: 0;
    background: linear-gradient(180deg, rgba(10, 16, 34, 0) 0%, #0A1022 67.71%, #0A1022 100%);
    pointer-events: unset;
  }*/
}
</style>
