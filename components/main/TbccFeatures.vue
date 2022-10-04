<template>
  <div class="tbcc-features e-container">
    <h2 :class="['base-h2', {'base-h2--dark': isDarkTheme}]">TBCC Features</h2>
    <p :class="['base-subtitle', {'base-subtitle--dark': isDarkTheme }]">
      TBCC has a variety of features that make it the best place to start
      trading
    </p>
    <div class="tbcc-features__list">
      <features-card v-for="(card, index) in $t('card')" :key="index" :content="card" />
    </div>
    <div class="tbcc-features__slider">
      <client-only>
        <Flickity id='dashboard-sliders' ref="features"  :options="featuresOptions">
          <div class="tbcc-features__slider-item">
            <features-card :content="$t('card')[0]" />
            <features-card :content="$t('card')[1]" />
            <features-card :content="$t('card')[2]" />
          </div>
          <div class="tbcc-features__slider-item">
            <features-card :content="$t('card')[3]" />
            <features-card :content="$t('card')[4]" />
            <features-card :content="$t('card')[5]" />
          </div>
        </Flickity>
      </client-only>
    </div>

  </div>
</template>

<i18n>
{
  "en": {
    "card": [
      {
        "img": "1",
        "name": "Spot & Margin",
        "text": "Trade 200+ pairs with up to 10x leverage"
      },
      {
        "img": "2",
        "name": "Derivatives",
        "text": "40+ quarterly futures and perpetual contracts"
      },
      {
        "img": "3",
        "name": "Stake & Earn",
        "text": "Earn daily rewards on your balance, no lock-up period"
      },
      {
        "img": "4",
        "name": "Mobile apps",
        "text": "Stay on top of the markets with the TBCC app for Android or iOS"
      },
      {
        "img": "5",
        "name": "Recurring buys",
        "text": "Invest in cryptocurrency slowly over time by scheduling buys"
      },
      {
        "img": "6",
        "name": "TBCC Pay",
        "text": "Earn daily rewards on your balance, no lock-up period"
      }
    ]
  },
  "ch": {
    "card": [
      {
        "img": "1",
        "name": "Spot & Margin",
        "text": "Trade 200+ pairs with up to 10x leverage"
      },
      {
        "img": "2",
        "name": "Derivatives",
        "text": "40+ quarterly futures and perpetual contracts"
      },
      {
        "img": "3",
        "name": "Stake & Earn",
        "text": "Earn daily rewards on your balance, no lock-up period"
      },
      {
        "img": "4",
        "name": "Mobile apps",
        "text": "Stay on top of the markets with the TBCC app for Android or iOS"
      },
      {
        "img": "5",
        "name": "Recurring buys",
        "text": "Invest in cryptocurrency slowly over time by scheduling buys"
      },
      {
        "img": "6",
        "name": "TBCC Pay",
        "text": "Earn daily rewards on your balance, no lock-up period"
      }
    ]
  }
}
</i18n>

<script>
import FeaturesCard from "@/components/main/FeaturesCard";
import getCurrentTheme from "@/mixins/getCurrentTheme";
export default {
  components: {FeaturesCard},
  mixins: [getCurrentTheme],
  data() {
    return {
    }
  },

  computed: {
    featuresOptions() {
      return {
        wrapAround: false,
        groupCells: 1,
        prevNextButtons: false
      }
    }
  },

}
</script>


<style lang="scss" scoped>
.base-h2 {
  margin: 0 0 14px;
}

.base-subtitle {
  margin: 0 0 56px;

  @media(max-width: 767px) {
    text-align: center;
  }
}

.tbcc-features {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 767px) {
    max-width: 425px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 90px 0;

    @media(max-width: 1023px) {
      justify-content: center;
      gap: 90px 30px;
    }

    @media(max-width: 767px) {
      display: none;
    }
  }

  &__slider {
    width: 100%;

    @media(min-width: 768px) {
      display: none;
    }
  }

  &__slider-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 35px;
    width: calc(100% - 35px);
    gap: 50px;
  }
}
</style>
