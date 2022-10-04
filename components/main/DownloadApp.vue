<template>
  <div :class="['download-app', 'e-container', {'download-app--dark': isDarkTheme }]">
      <div class="download-app__left">
        <img v-if="isDarkTheme" class="download-app__img" src="../../assets/images/trade-dark.png" width="456" height="531" alt="">
        <img v-else class="download-app__img" src="../../assets/images/trade.png" width="456" height="531" alt="">
      </div>
      <div class="download-app__right">
        <h2 :class="['base-h2', {'base-h2--dark': isDarkTheme}]">{{ $t('title') }}</h2>
        <p :class="['base-subtitle', {'base-subtitle--dark': isDarkTheme}]">{{ $t('subtitle') }}</p>
        <div class="download-app__actions">
          <base-button transparent class="download-app__btn">
            <icon-ios />
            {{ $t('appStore') }}
          </base-button>
          <base-button transparent class="download-app__btn">
            <icon-android />
            {{ $t('android') }}
          </base-button>
        </div>
      </div>
  </div>
</template>

<i18n>
{
  "en": {
    "title": "Trade anytime, anywhere",
    "subtitle": "Stay on top of the markets with the TBCC app for Android or iOS.",
    "appStore": "AppStore",
    "android": "Android"
  },
  "ch": {
    "title": "Trade anytime, anywhere",
    "subtitle": "Stay on top of the markets with the TBCC app for Android or iOS.",
    "appStore": "AppStore",
    "android": "Android"
  }
}
</i18n>

<script>
import BaseButton from "@/components/base/BaseButton";
import IconIos from "@/components/icon/IconIos";
import IconAndroid from "@/components/icon/IconAndroid";
import getCurrentTheme from "@/mixins/getCurrentTheme";
export default {
  components: {IconAndroid, IconIos, BaseButton},
  mixins: [getCurrentTheme]
}
</script>

<style lang="scss" scoped>
.base-h2 {
  margin: 0 0 20px;

  @media(max-width: 767px) {
    text-align: center;
  }
}

.base-subtitle {
  margin: 0 0 40px;
  max-width: 400px;

  @media(max-width: 767px) {
    max-width: 290px;
    text-align: center;
  }
}

.download-app {
  display: flex;
  align-items: center;

  @media(max-width: 767px) {
    flex-direction: column;
    max-width: 425px;
  }

  &__left,
  &__right {
    flex: 0 0 50%;
    max-width: 50%;

    @media(max-width: 767px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

  &__left {
    @media(min-width:  768px) and (max-width: 1023px) {
      padding-right: 20px;
    }

    @media(max-width: 767px) {
      width: 367px;
      min-height: 274px;
      overflow: hidden;
      position: relative;
      margin-bottom: 16px;
    }
  }

  &__right {
    @media(min-width:  768px) and (max-width: 1023px) {
      padding-left: 20px;
    }

    @media(max-width: 767px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &__img {
    width: 456px;
    height: 531px;
    object-fit: contain;

    @media(max-width: 1023px) {
      width: 100%;
      height: 100%;
      max-width: 456px;
      max-height: 531px;
    }

    @media(max-width: 767px) {
      position: absolute;
      top: -65px;
      left: 36%;
      transform: translateX(-50%);
      width: 367px;
      height: 531px;
    }
  }

  &__actions {
    display: flex;

    @media(max-width: 767px) {
      flex-direction: column;
      max-width: 295px;
      width: 100%;
    }
  }

  &__btn {
    &:not(:last-child) {
      @media(min-width: 768px) {
        margin-right: 20px;
      }

      @media(max-width: 767px) {
        margin-bottom: 20px;
      }
    }

    svg {
      margin-right: 10px;
    }
  }

  &--dark {
    .download-app__btn {
      color: #FFFFFF;
      border: 1px solid rgba(255, 255, 255, 0.25);
      background: transparent;
    }
  }
}
</style>

