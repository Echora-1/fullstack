<template>
  <div class="sign-up">
    <sign-up-form />
  </div>
</template>

<script>
import SignUpForm from "@/components/forms/SignUpForm";
export default {
  components: {SignUpForm},
  layout: 'empty',
}
</script>

<style lang="scss" scoped>
.sign-up {
  position: relative;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
