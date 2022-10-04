<template>
  <div :class="['news-card', {'news-card--dark': isDarkTheme}]">
    <div class="news-card__img-wrap">
      <img class="news-card__img" :src="require(`../../assets/images/news/${content.img}.jpg`)" width="360" height="150" :alt="content.title" >
    </div>
    <div class="news-card__content">
        <p class="news-card__title">{{ content.title }}</p>
        <p class="news-card__subtitle">{{ content.subtitle }}</p>
    </div>
  </div>
</template>

<script>
import getCurrentTheme from "@/mixins/getCurrentTheme";

export  default {
  mixins: [getCurrentTheme],
  props: {
    content: {
      type: Object,
      default: () => {
        return {
          img: "1",
          title: "Drivez NFT CAR Launch",
          subtitle: "Grab a Share of the 75,000 USDT Prize Pool!"
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.news-card {
  background: #FFFFFF;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    .news-card__img {
      transform: scale(1.05);
    }
  }

  &__img-wrap {
    height: 150px;
    overflow: hidden;
  }

  &__img {
    object-fit: contain;
    transition: all 0.3s;
    width: 100%;

    @media (max-width: 767px) {
      object-fit: cover;
    }
  }

  &__content {
    padding: 12px 15px 20px 25px;
  }

  &__title {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.25;
    color: #161C2F;
    margin: 0 0 8px;
  }

  &__subtitle {
    font-size: 16px;
    line-height: 1.25;
    color: #161C2F;
    opacity: 0.6;
    margin: 0;
  }

  &--dark {
    background: #161C2F;

    .news-card__title,
    .news-card__subtitle {
      color: #FFFFFF;
    }
  }
}
</style>
