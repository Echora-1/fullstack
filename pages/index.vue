<template>
  <div  :class="{ 'dark-mode': isDarkTheme }">
    <section class="wrap-main-screen">
      <main-screen />
    </section>
    <section class="wrap-main-overview">
      <main-overview />
    </section>
    <section class="wrap-tbcc-features">
      <tbcc-features />
    </section>
    <section class="wrap-download-app">
      <download-app />
    </section>
    <section class="wrap-start-trading">
      <start-trading />
    </section>
  </div>
</template>

<script>
import MainScreen from '~/components/main/MainScreen'
import MainOverview from '@/components/main/MainOverview'
import TbccFeatures from '@/components/main/TbccFeatures'
import DownloadApp from '@/components/main/DownloadApp'
import StartTrading from '@/components/main/StartTrading'
import getCurrentTheme from '@/mixins/getCurrentTheme'
export default {
  components: {
    StartTrading,
    DownloadApp,
    TbccFeatures,
    MainOverview,
    MainScreen,
  },
  mixins: [getCurrentTheme],
}
</script>

<style lang="scss" scoped>
.wrap-main-screen {
  position: relative;
  z-index: 1;
  padding-bottom: 120px;

  @media(max-width: 767px) {
    padding-bottom: 80px;
  }

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    width: 100%;
    min-width: 1440px;
    height: 393px;
    top: 172px;
    right: 0;
    background-image: url('../assets/images/main-bg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 393px;
    pointer-events: unset;

    @media(max-width: 767px) {
      top: 60px;
    }
  }

  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    width: 100%;
    min-width: 1440px;
    height: 393px;
    top: 345px;
    right: 0;
    background: linear-gradient(
      180deg,
      rgba(241, 243, 248, 0) 0%,
      #f1f3f8 67.71%,
      #f1f3f8 100%
    );
    pointer-events: unset;
  }
}

.wrap-main-overview {
  padding-bottom: 180px;

  @media(max-width: 767px) {
    padding-bottom: 100px;
  }

}

.wrap-tbcc-features {
  padding-bottom: 100px;
}

.wrap-download-app {
  padding-bottom: 110px;
  position: relative;
  z-index: 1;
}

.wrap-start-trading {
  padding-bottom: 130px;
  position: relative;
  z-index: 1;

  @media(max-width: 767px) {
    padding-bottom: 50px;
  }

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    width: 100%;
    min-width: 1440px;
    height: 393px;
    top: -115px;
    right: 0;
    background-image: url('../assets/images/main-bg-footer.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 393px;
    pointer-events: unset;

    @media(max-width: 767px) {
      top: -60px;
    }
  }
}

.dark-mode {
  background: #0a1022;

  .wrap-main-screen {
    &::before {
      background-image: url('../assets/images/dark-main-bg.png');
    }

    &::after {
      background: linear-gradient(180deg, rgba(10, 16, 34, 0) 0%, #0A1022 67.71%, #0A1022 100%);
    }
  }

  .wrap-start-trading {
    &::before {
      background-image: url('../assets/images/main-bg-footer-dark.png');
    }
  }
}
</style>
