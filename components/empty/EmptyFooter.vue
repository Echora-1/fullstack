<template>
  <footer :class="['empty-footer', {'empty-footer--dark': isDarkTheme}]">
    <div class="empty-footer__nav">
      <nuxt-link v-for="({name, link}, index) in $t('nav')" :key="index" :to="localePath(link)" class="empty-footer__nav-item">
        {{ name }}
      </nuxt-link>
    </div>
  </footer>
</template>

<i18n>
{
  "en": {
    "nav": [
      {
        "name": "Trading",
        "link": "/"
      },
      {
        "name": "Fees and Limits",
        "link": "/"
      },
      {
        "name": "System Status",
        "link": "/"
      },
      {
        "name": "API",
        "link": "/"
      }
    ]
  },
  "ch": {
    "nav": [
      {
        "name": "Trading",
        "link": "/"
      },
      {
        "name": "Fees and Limits",
        "link": "/"
      },
      {
        "name": "System Status",
        "link": "/"
      },
      {
        "name": "API",
        "link": "/"
      }
    ]
  }
}
</i18n>

<script>
import getCurrentTheme from "@/mixins/getCurrentTheme";

export default {
  mixins: [getCurrentTheme],
}
</script>

<style lang="scss" scoped>
.empty-footer {
  display: flex;
  justify-content: center;
  padding-bottom: 40px;

  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__nav-item {
    font-weight: 500;
    font-size: 16px;
    color: rgba(22, 28, 47, 0.6);

    &:not(:last-child) {
      margin-right: 50px;
    }
  }

  &--dark {
    .empty-footer__nav-item {
      color: rgba(255, 255, 255, 0.3);
    }
  }
}
</style>
