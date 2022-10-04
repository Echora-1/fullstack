<template>
  <div class="top-gainers">
    <client-only>
      <Flickity id='top-gainers-slider' ref="topGainers" :key='sliderKey' :options="topGainersOptions">
        <overview-card v-for="(card, index) in $t('card')" :key="index" :content="card" class="top-gainers__item" />
      </Flickity>
    </client-only>
  </div>
</template>


<i18n>
{
  "en": {
    "card": [
      {
        "img": "bitcoin-icon",
        "name": "BTC",
        "price": "43,650.89",
        "percentChange": "+5.37%",
        "link": "/"
      },
      {
        "img": "eth-icon",
        "name": "ETH",
        "price": "2,934.54",
        "percentChange": "+2.62%",
        "link": "/"
      },
      {
        "img": "ada-icon",
        "name": "ADA",
        "price": "0,43",
        "percentChange": "+1.98%",
        "link": "/"
      },
      {
        "img": "tbcc-icon",
        "name": "TBCC",
        "price": "0,63",
        "percentChange": "+7.41%",
        "link": "/"
      }
    ]
  },
  "ch": {
    "card": [
      {
        "img": "bitcoin-icon",
        "name": "BTC",
        "price": "43,650.89",
        "percentChange": "+5.37%",
        "link": "/"
      },
      {
        "img": "eth-icon",
        "name": "ETH",
        "price": "2,934.54",
        "percentChange": "+2.62%",
        "link": "/"
      },
      {
        "img": "ada-icon",
        "name": "ADA",
        "price": "0,43",
        "percentChange": "+1.98%",
        "link": "/"
      },
      {
        "img": "tbcc-icon",
        "name": "TBCC",
        "price": "0,63",
        "percentChange": "+7.41%",
        "link": "/"
      }
    ]
  }
}
</i18n>

<script>
import OverviewCard from "@/components/main/OverviewCard";
export default  {
  components: {OverviewCard},
  data() {
    return {
      innerWidth: 0,
      sliderKey: 1,
    }
  },

  computed: {
    topGainersOptions() {
      if(this.innerWidth > 767 && this.innerWidth < 1200) {
        return {
          pageDots: true,
          wrapAround: false,
          groupCells: 3,
          prevNextButtons: false
        }
      }
      if(this.innerWidth <= 767) {
        return {
          pageDots: true,
          wrapAround: false,
          groupCells: 1,
          prevNextButtons: false
        }
      }
      return {
        pageDots: false,
        wrapAround: false,
        groupCells: 4,
        prevNextButtons: false
      }
    }
  },

  watch: {
    topGainersOptions() {
      this.sliderKey += 1
    }
  },

  mounted() {
    this.setWidth();
    window.addEventListener('resize', this.setWidth);
  },

  methods: {
    setWidth() {
      this.innerWidth = window.innerWidth
    }
  }
}
</script>

<style lang="scss" scoped>
.top-gainers {
  width: 100%;

  &__item {
    margin-right: 15px;
    min-height: 322px;
    width: calc((100% - 15px) / 1);
    max-width: 264px;

    @media (min-width: 768px) {
      width: calc((100% - 72px) / 3);
    }

    @media (min-width: 1200px) {
      width: calc((100% - 96px) / 4);
    }
  }
}
</style>
