<template>
  <div class="charts-wrap" id="tradingChartWrap">
    <v-tabs
      v-model="tab"
      background-color="transparent"
      active-class="charts-wrap__tab--active"
      class="charts-wrap__tabs"
    >
      <v-tabs-slider class="charts-wrap__tab-slider"></v-tabs-slider>
      <v-tab
        class="charts-wrap__tab"
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item

        class="charts-wrap__tab-item"
      >
        <trading-chart />
      </v-tab-item>
      <v-tab-item
        class="charts-wrap__tab-item"
      >
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>


<script>
import TradingChart from "@/components/trading/chart/TradingChart";
export default {
  components: {TradingChart},
  data() {
    return {
      tab: 0,
      items: [
        'Chart', 'Overview',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.charts-wrap {
  background: #FFFFFF;
  position: relative;
  min-height: 380px;

  &__header {
    font-weight: 500;
    font-size: 16px;
    color: #161C2F;
    letter-spacing: -0.4px;
    padding: 20px 20px 12px;
  }

  &__search {
    margin: 18px 20px 10px;
  }

  &__tabs {
    overflow: hidden;
  }

  &__tab {
    font-weight: 500;
    font-size: 16px;
    color: #161C2F99;
    letter-spacing: -0.4px;
    text-transform: unset;
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
    padding: 4px 4px 0;
  }
}
</style>

<style>
.v-slide-group__content {
  border-bottom: 1px solid rgba(22,28,47,0.10196);
}

.v-tabs-slider-wrapper {
  bottom: -1px;
}
</style>
