<template>
  <div>
    <div class="referral-payments-filter">
      <div class="referral-payments-filter__item">
        <p class="referral-payments-filter__item-label">Date range</p>
        <date-picker
          v-model="date"
          type="date"
          prefix-class="xmx"
          range
          value-type="timestamp"
          placeholder="Select date range"
        ></date-picker>
      </div>
      <div class="referral-payments-filter__item">
        <v-text-field
          v-model="referral"
          class="referral-payments-filter__input"
          placeholder="Type referral login..."
          persistent-placeholder
          label="Referral"
          hide-details
        >
        </v-text-field>
      </div>
      <div class="referral-payments-filter__item">
        <v-autocomplete
          ref="country"
          v-model="currency"
          class="referral-payments-filter__input"
          :items="currencies"
          label="Currency"
          placeholder="Select currency"
          persistent-placeholder
          hide-details
        ></v-autocomplete>
      </div>
    </div>
    <div class="referral-payments-filter__actions">
      <common-button @click="setFilters">Apply</common-button>
      <common-button transparent @click="resetFilters"> Reset </common-button>
    </div>
  </div>
</template>

<script>
import CommonButton from '@/components/common/CommonButton'
export default {
  components: { CommonButton },
  data() {
    return {
      date: [],
      referral: null,
      currencies: ['TBCC', 'TRX'],
      currency: null,
    }
  },

  methods: {
    resetFilters() {
      this.date = []
      this.referral = null
      this.currency = null
      this.$emit('reset-filters')
    },

    setFilters() {
      const filters = {
        date: this.date,
        referral: this.referral,
        currency: this.currency,
      }
      this.$emit('set-filters', filters)
    },
  },
}
</script>

<style lang="scss" scoped>
.referral-payments-filter {
  display: flex;
  align-items: end;
  gap: 40px;
  max-width: 860px;

  &__item {
    width: 100%;
  }

  &__item-label {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.41px;
    color: #2f385e;
    margin: 0 0 8px;
  }

  &__input::v-deep {
    .v-input__slot {
      border: 1px solid rgba(47, 56, 94, 0.4);
      border-radius: 6px;

      &::before,
      &::after {
        display: none;
      }
    }

    .v-input {
      max-height: 40px;
    }

    input {
      display: inline-block;
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      padding: 6px 10px;
      font-size: 16px;
      line-height: 1.4;
      color: #2f385e;
      background-color: #fff;
      border-radius: 6px;
      box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
      max-height: 40px;

      &::placeholder {
        color: #2f385e;
        opacity: 0.6;
      }
    }

    .v-label {
      top: -8px;
      height: 20px;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.41px;
      color: #2f385e !important;
    }

    .v-label--active {
      transform: translateY(-18px) scale(1);
    }

    .v-input__append-inner {
      margin-top: 8px;
    }
  }

  &__actions {
    margin-top: 30px;
    margin-bottom: 24px;
    display: flex;
    gap: 20px;
  }
}
</style>
