<template>
  <div :class="['overview-card', {'overview-card--dark': isDarkTheme }]">
    <img class="overview-card__img" :src="require(`../../assets/images/cryptocurrencies/${content.img}.svg`)" :alt="content.name">
    <p class="overview-card__name">{{ content.name }}/USDT</p>
    <p class="overview-card__price">${{ content.price }}</p>
    <p class="overview-card__percent-change">{{ content.percentChange }}</p>
    <nuxt-link class="overview-card__link" :to="localePath(content.link)">
      <base-button class="overview-card__btn">
        Trade Now
      </base-button>
    </nuxt-link>
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton";
import getCurrentTheme from "@/mixins/getCurrentTheme";
export default {
  components: {BaseButton},
  mixins: [getCurrentTheme],
  props: {
    content: {
      type: Object,
      default() {
        return {
            img: 'bitcoin-icon',
            name: 'BTC',
            price: '43,650.89',
            percentChange: '+5.37%',
            link: '/'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.overview-card {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 39px 32px 37px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0px 24px 36px rgba(22, 28, 47, 0.18);
  }


  &__img {
    margin-bottom: 17px;
  }

  &__name {
    font-size: 24px;
    line-height: 28px;
    color: #161C2F;
    margin: 0 0 17px;
  }

  &__price {
    font-size: 22px;
    line-height: 28px;
    margin: 0 0 17px;
  }

  &__percent-change {
    font-size: 18px;
    line-height: 28px;
    color: #2CE0C5;
    margin: 0 0 17px;
  }

  &__link {
    width: 100%;
  }

  &__btn {
    color: #161C2F;
    background: #FFFFFF;
    border: 1px solid rgba(22, 28, 47, 0.1);
    width: 100%;
  }

  &--dark {
    background: #161C2F;

    .overview-card__name {
      color: #FFFFFF;
    }

    .overview-card__price {
      color: #FFFFFF99;
    }

    .overview-card__btn {
      color: #FFFFFF;
      background: #161C2F;
      border: 1px solid rgba(255, 255, 255, 0.1)
    }
  }
}
</style>

