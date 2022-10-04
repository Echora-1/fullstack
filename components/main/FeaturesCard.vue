<template>
  <div :class="['features-card', {'features-card--dark': isDarkTheme}]">
    <img class="features-card__img" :src="require(`../../assets/images/features/${content.img}.svg`)" width="40" height="40"  :alt="content.name">
    <p class="features-card__name">{{ content.name }}</p>
    <p class="features-card__text">{{ content.text }}</p>
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
          img: '1',
          name: 'Spot & Margin',
          text: 'Trade 200+ pairs with up to 10x leverage'
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.features-card {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__img {
    object-fit: none;
    margin-bottom: 16px;
  }

  &__name {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: #161C2F;
    margin: 0 0 10px;
  }

  &__text {
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #161C2F;
    opacity: 0.4;
    margin: 0;
    max-width: 286px;
  }

  &--dark {
    .features-card__name,
    .features-card__text {
      color: #FFFFFF;
    }
  }
}
</style>
