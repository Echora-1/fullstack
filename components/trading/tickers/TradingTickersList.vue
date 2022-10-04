<template>
  <div class="tickers-list">
    <div class="tickers-list__header">
      <h2 class="tickers-list__header-title">Market</h2>
    </div>
    <div class="tickers-list__main">
      <v-text-field
        v-model="search"
        label="Search crypto, pairs, contracts"
        single-line
        hide-details
        filled
        rounded
        full-width
        dense
        prepend-inner-icon="mdi-magnify"
        class="tickers-list__search rounded-2px"
      />

      <v-tabs
        v-model="tab"
        background-color="transparent"
        grow
        active-class="tickers-list__tab--active"
        class="tickers-list__tabs"
        :mobile-breakpoint="0"
      >
        <v-tabs-slider class="tickers-list__tab-slider"></v-tabs-slider>
        <v-tab
          class="tickers-list__tab"
          v-for="item in items"
          :key="item"
        >
          {{ item }}
        </v-tab>
      </v-tabs>
        <div class="tickers-list__btns">
          <v-btn
            small
            elevation="0"
          >
            USDT
          </v-btn>
          <v-btn
            small
            elevation="0"
            color="#FFFFFF"
          >
            USDC
          </v-btn>
          <v-btn
            small
            elevation="0"
            color="#FFFFFF"
          >
            BTC
          </v-btn>
        </div>
        <v-tabs-items v-model="tab">
          <v-tab-item
            class="tickers-list__tab-item"
          >
          </v-tab-item>
          <v-tab-item
            class="tickers-list__tab-item"
          >
            <spot-table :coins="filteredCoins" />
          </v-tab-item>
          <v-tab-item
            class="tickers-list__tab-item"
          >
          </v-tab-item>
          <v-tab-item
            class="tickers-list__tab-item"
          >
          </v-tab-item>
        </v-tabs-items>
    </div>
  </div>
</template>

<script>
import SpotTable from "@/components/trading/tickers/SpotTable";
export default {
  components: {SpotTable},
  data() {
    return {
      search: "",
      tab: 1,
      items: [
        'Favorites', 'Spot', 'Perpetual', 'Features',
      ],
      coins: [
        {
          pair: {coin: 'DOGE/USDT', value: '155.79M DOGE  '},
          price: {value: '0.087327', percentChange: '+0.26'},
        },
        {
          pair: {coin: 'XRP/USDT', value: '64.1M XRP'},
          price: {value: '0.087327', percentChange: '-0.59'},
        },
        {
          pair: {coin: 'ADA/USDT', value: '39.62M ADA'},
          price: {value: '0.56733', percentChange: '+2.86'},
        },
        {
          pair: {coin: 'DOT/USDT', value: '24.54M DOT'},
          price: {value: '9.498', percentChange: '+0.62'},
        },
        {
          pair: {coin: 'OKB/USDT', value: '984,34 OKB'},
          price: {value: '11.46', percentChange: '+0.26'},
        },
        {
          pair: {coin: 'LTC/USDT', value: '189,54 LTC'},
          price: {value: '62.91', percentChange: '-5.8'},
        },
        {
          pair: {coin: 'ETH/USDT', value: '155,545 ETH'},
          price: {value: '1,858.95', percentChange: '+1.84'},
        },
        {
          pair: {coin: 'OKT/USDT', value: '36,578 OKT'},
          price: {value: '25.00', percentChange: '+3.12'},
        },
        {
          pair: {coin: 'BTC/USDT', value: '10,947 BTC'},
          price: {value: '43,801.2', percentChange: '+0.53'},
        },
      ],
    }
  },

  computed: {
    filteredCoins() {
      return this.coins.filter(coin => {
        const coinValues = Object.entries(coin)
          .flatMap(item => Object.values(item[1]))
          .join(' ')
          .toLowerCase()
        return coinValues.includes(this.search.toLowerCase())
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.tickers-list {
  background: #FFFFFF;

  &__header {
    padding: 11px 20px 12px;
    border-bottom: 1px solid #161C2F1A;
  }

  &__header-title {
    font-weight: 500;
    font-size: 16px;
    color: #161C2F;
  }

  &__search {
    margin: 18px 20px 10px;
  }

  &__tabs {
    overflow: hidden;
  }

  &__tab {
    font-weight: 500;
    font-size: 13px;
    color: #161C2F99;
    text-transform: unset;
    padding:0;
    min-width: auto;

    &--active {
      color: #161C2F;
      border-color: #FFFFFF;
      background: #FFFFFF;
    }
  }

  &__tab-slider {
    background: linear-gradient(77.9deg, #0066FF -3.83%, #2CE0C5 110.36%);
  }

  &__tab-item {
    display: flex;
    flex-direction: column;
    padding: 5px 0 25px;
  }

  &__btns {
    padding: 10px 16px;
    display: flex;
    gap: 20px;
  }
}
</style>
