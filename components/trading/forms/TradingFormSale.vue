<template>
  <div class="trading-form-sale">
    <div class="trading-form-sale__header">
      <span class="trading-form-sale__title">Available</span>
      <span class="trading-form-sale__value">0.000000 BTC</span>
    </div>
    <v-text-field
      v-model="price"
      label="Price"
      single-line
      hide-details
      filled
      rounded
      full-width
      dense
      class="mb-5 rounded-2px"
      suffix="43.806  USDT"
    />
    <v-text-field
      v-model="amount"
      label="Amount"
      single-line
      hide-details
      filled
      rounded
      full-width
      dense
      class=" rounded-2px"
      suffix="BTC"
    />

    <div class="trading-form-sale__percent">
      <range-slider />
    </div>

    <v-text-field
      v-model="total"
      label="Total"
      single-line
      hide-details
      filled
      rounded
      full-width
      dense
      class=" mb-5 rounded-2px"
      suffix="USDT"
    />

    <v-btn
      block
      depressed
      color="#FF6B6B"
      class="trading-form-sale__btn rounded-2px"
    >
      Sell BTC
    </v-btn>
  </div>
</template>

<script>
import RangeSlider from "@/components/trading/forms/RangeSlider";
export default {
  components: {RangeSlider},
  data() {
    return {
      price: "",
      amount: "",
      total: "",
    }
  }
}
</script>


<style lang="scss" scoped>
.trading-form-sale {

  &__header {
    display: flex;
    align-items: center;
    padding: 0 0 8px;
    justify-content: space-between;
  }

  &__title {
    font-weight: 500;
    font-size: 13px;
    letter-spacing: -0.41px;
    color: #161C2F;
    opacity: 0.6;
  }

  &__value {
    font-weight: 500;
    font-size: 12px;
    text-align: right;
    letter-spacing: -0.41px;
    color: #161C2F;
  }

  &__percent {
    margin: 22px 0;
    height: 14px;
  }

  &__btn {
    color: #FFFFFF;
  }
}
</style>
