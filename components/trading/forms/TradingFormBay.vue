<template>
  <div class="trading-form-bay">
    <div class="trading-form-bay__header">
      <span class="trading-form-bay__title">Available</span>
      <span class="trading-form-bay__value">1040.043 USDT</span>
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
      class="rounded-2px"
      suffix="BTC"
    />

    <div class="trading-form-bay__percent">
      <range-slider @percent-change="percentChange" />
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
      class="mb-5 rounded-2px"
      suffix="USDT"
    />

    <v-btn
      block
      depressed
      color="#20C997"
      class="trading-form-bay__btn rounded-2px"
    >
      Buy BTC
    </v-btn>
  </div>
</template>

<script>
import RangeSlider from "@/components/trading/forms/RangeSlider";
export default {
  components: {RangeSlider},
  data() {
    return {
      price: '',
      amount: '',
      total: '',
      seasons: ['Winter', 'Spring', 'Summer', 'Fall'],
    }
  },
  methods: {
    season(val) {
      return this.icons[val]
    },

    percentChange(v) {
      console.log(v)
    }
  },
}
</script>

<style lang="scss" scoped>
.trading-form-bay {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 8px;
  }

  &__title {
    font-weight: 500;
    font-size: 13px;
    letter-spacing: -0.41px;
    color: #161c2f;
    opacity: 0.6;
  }

  &__value {
    font-weight: 500;
    font-size: 12px;
    text-align: right;
    letter-spacing: -0.41px;
    color: #161c2f;
  }

  &__percent {
    margin: 22px 0;
    height: 14px;
  }

  &__btn {
    color: #ffffff;
  }
}
</style>
