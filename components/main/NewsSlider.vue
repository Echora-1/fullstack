<template>
  <div class="slider-news">
    <client-only>
      <Flickity
        id="news-slider"
        ref="flickity"
        :key="sliderKey"
        :options="sliderOptions"
      >
      <news-card v-for="(card, index) in $t('cards')" :key="index" :content="card" class="slider-news__item"/>
      </Flickity>
    </client-only>
  </div>
</template>

<i18n>
{
  "en": {
    "cards": [
      {
        "img": "1",
        "title": "Drivez NFT CAR Launch",
        "subtitle": "Grab a Share of the 75,000 USDT Prize Pool!"
      },
      {
        "img": "2",
        "title": "Buy Crypto with card",
        "subtitle": "Buy crypto with Credit Card."
      },
      {
        "img": "3",
        "title": "Launch P2P trading ",
        "subtitle": "Meet the opportunity of p2p trading soon."
      },
      {
        "img": "1",
        "title": "Drivez NFT CAR Launch",
        "subtitle": "Grab a Share of the 75,000 USDT Prize Pool!"
      },
      {
        "img": "2",
        "title": "Buy Crypto with card",
        "subtitle": "Buy crypto with Credit Card."
      },
      {
        "img": "3",
        "title": "Launch P2P trading ",
        "subtitle": "Meet the opportunity of p2p trading soon."
      }
    ]
  },
  "ch": {
    "cards": [
      {
        "img": "1",
        "title": "Drivez NFT CAR Launch",
        "subtitle": "Grab a Share of the 75,000 USDT Prize Pool!"
      },
      {
        "img": "2",
        "title": "Buy Crypto with card",
        "subtitle": "Buy crypto with Credit Card."
      },
      {
        "img": "3",
        "title": "Launch P2P trading ",
        "subtitle": "Meet the opportunity of p2p trading soon."
      },
      {
        "img": "1",
        "title": "Drivez NFT CAR Launch",
        "subtitle": "Grab a Share of the 75,000 USDT Prize Pool!"
      },
      {
        "img": "2",
        "title": "Buy Crypto with card",
        "subtitle": "Buy crypto with Credit Card."
      },
      {
        "img": "3",
        "title": "Launch P2P trading ",
        "subtitle": "Meet the opportunity of p2p trading soon."
      }
    ]
  }
}
</i18n>

<script>
import NewsCard from "@/components/main/NewsCard";
export default {
  components: {NewsCard},
  data() {
    return {
      innerWidth: 0,
      sliderKey: 1,
    }
  },

  computed: {
    sliderOptions() {
      if (this.innerWidth > 767 && this.innerWidth < 1200) {
        return {
          pageDots: true,
          wrapAround: false,
          groupCells: 2,
          prevNextButtons: false,
        }
      }
      if (this.innerWidth <= 767) {
        return {
          pageDots: true,
          wrapAround: false,
          groupCells: 1,
          prevNextButtons: false,
        }
      }
      return {
        pageDots: true,
        wrapAround: false,
        groupCells: 3,
        prevNextButtons: false,
      }
    },
  },

  watch: {
    sliderOptions() {
      this.sliderKey += 1
    },
  },

  mounted() {
    this.setWidth()
    window.addEventListener('resize', this.setWidth)
  },

  methods: {
    setWidth() {
      this.innerWidth = window.innerWidth
    },
  },
}
</script>

<style lang="scss" scoped>
.slider-news {
  width: 100%;
  max-width: 380px;

  @media (min-width: 768px) {
    max-width: 760px;
  }

  @media (min-width: 1200px) {
    max-width: 100%;
  }

  &__item {
    margin-right: 15px;
    width: calc((100% - 15px));

    @media (min-width: 768px) {
      margin-right: 24px;
      width: calc((100% - 48px) / 2);
    }

    @media (min-width: 1200px) {
      width: calc((100% - 72px) / 3);
    }
  }
}
</style>
