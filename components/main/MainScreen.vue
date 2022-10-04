<template>
  <div class="main-screen e-container">
    <div class="main-screen__content">
      <div class="main-screen__statistics">
        <div class="main-screen__statistics-wrap">
          <statistic-item
            v-for="(item, index) in $t('statistics')"
            :content="item"
            :key="index"
            class="main-screen__statistic-item"
          />
        </div>
      </div>
      <h1 :class="['base-h1', {'base-h1--dark': isDarkTheme}]">
        {{ $t('title')[0] }}<span>{{ $t('title')[1] }}</span>
      </h1>
      <base-button class="main-screen__btn">{{
        $t('createAccount')
      }}</base-button>
      <news-slider />
    </div>
  </div>
</template>

<script>
import BaseButton from '~/components/base/BaseButton'
import StatisticItem from '~/components/main/StatisticItem'
import NewsSlider from '@/components/main/NewsSlider'
import getCurrentTheme from '@/mixins/getCurrentTheme'
export default {
  components: { NewsSlider, StatisticItem, BaseButton },
  mixins: [getCurrentTheme],
}
</script>

<i18n>
{
  "en": {
    "title": ["TBCC exchange: be the ", "future"],
    "createAccount": "Create an Account",
    "statistics": [{"name": "Traders online", "value": "24 395"}, {"name": "Currency pairs", "value": "183"}, {"name": "24h volume", "value": "2 254 BTC"}]
  },
  "ch": {
    "title": ["TBCC exchange: be the ", "future"],
    "createAccount": "Create an Account",
    "statistics": [{"name": "Traders online", "value": "24 395"}, {"name": "Currency pairs", "value": "183"}, {"name": "24h volume", "value": "2 254 BTC"}]
  }
}
</i18n>

<style lang="scss" scoped>
.base-h1 {
  max-width: 650px;
  margin: 0 0 40px;

  @media(max-width: 767px) {
    max-width: 290px;
  }
}

.main-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 120px;

  @media(max-width: 767px) {
    max-width: 425px;
    margin: 0 auto;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  &__btn {
    margin-bottom: 110px;

    @media(max-width: 767px) {
      margin-bottom: 80px;
    }
  }

  &__statistics {
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(44, 224, 197, 0) 0%,
      rgba(0, 102, 255, 0.15) 49.48%,
      rgba(44, 224, 197, 0) 100%
    );
    min-height: 34px;
    display: flex;
    margin-bottom: 100px;

    @media(max-width: 767px) {
      display: none;
    }
  }

  &__statistics-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    max-width: 640px;
    margin: 0 auto;
    justify-content: space-between;
  }

  &__statistic-item {
    max-width: 175px;
    width: 100%;
    justify-content: center;
  }
}
</style>
