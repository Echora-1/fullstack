<template>
  <div class="trading-forms-wrapper">
    <v-tabs
      v-model="tab"
      background-color="transparent"
      active-class="trading-forms-wrapper__tab--active"
      class="trading-forms-wrapper__tabs"
    >
      <v-tabs-slider class="trading-forms-wrapper__tab-slider"></v-tabs-slider>
      <v-tab
        class="trading-forms-wrapper__tab"
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item

        class="trading-forms-wrapper__tab-item"
      >
        <div class="trading-forms-wrapper__forms">
          <trading-form-bay class="trading-forms-wrapper__form" />
          <trading-form-sale class="trading-forms-wrapper__form"/>
        </div>
      </v-tab-item>
      <v-tab-item
        class="trading-forms-wrapper__tab-item"
      >
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
import TradingFormBay from "@/components/trading/forms/TradingFormBay";
import TradingFormSale from "@/components/trading/forms/TradingFormSale";
export default {
  components: {TradingFormSale, TradingFormBay},
  data() {
    return {
      tab: 0,
      items: [
        'Limit', 'Market', 'Stop'
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.trading-forms-wrapper {
  background: #FFFFFF;
  position: relative;

  &__header {
    font-weight: 500;
    font-size: 16px;
    color: #161C2F;
    letter-spacing: -0.4px;
    padding: 20px 20px 12px;
  }

  &__tabs {
    overflow: hidden;
  }

  &__forms {
    display: flex;
    gap: 20px;
  }

  &__form {
    width: 100%;
    max-width: calc((100% - 20px) /2);
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
    padding: 16px;
  }
}
</style>
