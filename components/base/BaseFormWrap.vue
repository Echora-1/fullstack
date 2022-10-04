<template>
  <div :class="['form-wrap', {'form-wrap--dark': isDarkTheme }]">
    <div class="form-wrap__header">
      <h2 class="form-wrap__title">{{ content.title }}</h2>
      <p class="form-wrap__subtitle">{{ content.subtitle }}</p>
    </div>
    <slot>

    </slot>
  </div>
</template>

<script>
import getCurrentTheme from "@/mixins/getCurrentTheme";

export default {
  mixins: [getCurrentTheme],
  props: {
    content: {
      type: Object,
      default: () => {
        return {
          title: "",
          subtitle: ""
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form-wrap {
  background: #FFFFFF;
  border-radius: 16px;
  width: 100%;
  max-width: 480px;

  &__header {
    padding: 30px 20px;
    border-bottom: 2px solid #161C2F1A;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-weight: 500;
    font-size: 28px;
    text-align: center;
    color: #161C2F;
    margin: 0 0 10px;
  }

  &__subtitle {
    font-size: 18px;
    color: #161C2F;
    opacity: 0.35;
    margin: 0;
  }

  &--dark {
    background: #161C2F;

    .form-wrap__header {
      border-bottom: 2px solid #FFFFFF1A;
    }

    .form-wrap__title {
      color: #FFFFFF;
    }

    .form-wrap__subtitle {
      color: #FFFFFF;
      opacity: 0.35
    }
  }
}
</style>
