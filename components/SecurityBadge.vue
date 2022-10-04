<template>
  <div :class="['security-badge', {'security-badge--dark': isDarkTheme }]">
    <icon-security class="security-badge__icon"/>
    <p class="security-badge__text">https://tbcc.com</p>
  </div>
</template>
<script>
import IconSecurity from "@/components/icon/IconSecurity";
import getCurrentTheme from "@/mixins/getCurrentTheme";
export default {
  components: {IconSecurity},
  mixins: [getCurrentTheme]
}
</script>

<style lang="scss" scoped>
.security-badge {
  width: 186px;
  background: #161C2F0D;
  border-radius: 24px;
  display: flex;
  align-items: center;
  padding: 10px 20px;

  &__icon {
    margin-right: 12px;
    margin-bottom: 3px;
  }

  &__text {
    font-size: 16px;
    text-align: center;
    color: #161C2F;
    opacity: 0.35;
    margin: 0;
  }

  &--dark {
    background: #FFFFFF0D;

    .security-badge__text {
      color: #FFFFFF;
      opacity: 0.35;
    }
  }
}
</style>
