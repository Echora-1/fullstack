<template>
  <div :class="['statistic-item', { 'statistic-item--dark': isDarkTheme }]">
    <p class="statistic-item__name">{{ content.name }}</p>
    <p class="statistic-item__value">{{ content.value }}</p>
  </div>
</template>

<script>
import getCurrentTheme from '@/mixins/getCurrentTheme'

export default {
  mixins: [getCurrentTheme],
  props: {
    content: {
      type: Object,
      default: () => {
        return {
          value: '',
          name: '',
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.statistic-item {
  display: flex;

  &__value,
  &__name {
    font-weight: 500;
    font-size: 16px;
    color: #161c2f;
    margin: 0;
  }

  &__name {
    opacity: 0.6;
    display: inline-block;
    margin-right: 15px;
  }

  &--dark {
    .statistic-item__value,
    .statistic-item__name {
      color: #ffffff;
    }
  }
}
</style>
