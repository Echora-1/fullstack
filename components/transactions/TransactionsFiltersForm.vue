<template>
  <div>
    <div class="filters-form">
      <div class="filters-form__item-1">
        <p class="filters-form__item-label">Date from/till</p>
        <date-picker
          v-model="date"
          type="date"
          prefix-class="xmx"
          range
          value-type="timestamp"
          placeholder="Select date range"
        ></date-picker>
      </div>
      <div class="filters-form__item-2">
        <p class="filters-form__item-label">Time from</p>
        <date-picker
          v-model="timeFrom"
          value-type="format"
          type="time"
          prefix-class="xmx"
          format="HH:mm"
          placeholder="HH:mm"
        ></date-picker>
      </div>
      <div class="filters-form__item-3">
        <p class="filters-form__item-label">Time till</p>
        <date-picker
          v-model="timeTill"
          value-type="format"
          type="time"
          prefix-class="xmx"
          format="HH:mm"
          placeholder="HH:mm"
        ></date-picker>
      </div>
      <div class="filters-form__item-4">
        <v-text-field
          v-model="transactionId"
          class="filters-form__input"
          placeholder="Find transcation by ID..."
          persistent-placeholder
          label="Transaction ID"
          hide-details
        >
        </v-text-field>
      </div>
      <div class="filters-form__item-5">
        <v-text-field
          v-model="transactionHash"
          label="Transaction Hash"
          class="filters-form__input"
          placeholder="Find by transaction hash..."
          persistent-placeholder
          hide-details
        >
        </v-text-field>
      </div>
      <div class="filters-form__item-6">
        <v-text-field
          v-model="address"
          label="Address"
          class="filters-form__input"
          placeholder="Find by recipient address..."
          persistent-placeholder
          hide-details
        >
        </v-text-field>
      </div>
      <div class="filters-form__item-7">
        <v-autocomplete
          ref="country"
          v-model="currency"
          class="filters-form__input"
          :items="currencies"
          label="Currency"
          placeholder="Select currency"
          persistent-placeholder
          hide-details
        ></v-autocomplete>
      </div>
      <div class="filters-form__item-8">
        <v-autocomplete
          ref="country"
          v-model="type"
          class="filters-form__input"
          :items="types"
          label="Type"
          placeholder="Select type"
          persistent-placeholder
          hide-details
        ></v-autocomplete>
      </div>
      <div class="filters-form__item-9">
        <v-autocomplete
          ref="country"
          v-model="status"
          class="filters-form__input"
          :items="statuses"
          label="Status"
          placeholder="Select status"
          persistent-placeholder
          hide-details
        ></v-autocomplete>
      </div>
    </div>
    <div class="filters-form__actions">
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
      timeTill: null,
      timeFrom: null,
      transactionId: null,
      transactionHash: null,
      address: null,
      currencies: ['TBCC', 'BTC'],
      currency: null,
      types: ['Deposit'],
      type: null,
      statuses: ['Executed'],
      status: null,
    }
  },

  methods: {
    resetFilters() {
      this.date = []
      this.timeTill = null
      this.timeFrom = null
      this.transactionId = null
      this.transactionHash = null
      this.address = null
      this.currency = null
      this.type = null
      this.status = null
      this.$emit('reset-filters')
    },

    setFilters() {
      const filters = {
        date: this.date,
        transactionId: this.transactionId,
        transactionHash: this.transactionHash,
        address: this.address,
        currency: this.currency,
        type: this.type,
        status: this.status,
      }
      this.$emit('set-filters', filters)
    },
  },
}
</script>

<style lang="scss" scoped>
.filters-form {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 30px;
  max-width: 860px;

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

  &__item-1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  &__item-2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  &__item-3 {
    grid-area: 1 / 3 / 2 / 4;
  }
  &__item-4 {
    grid-area: 2 / 1 / 3 / 2;
    position: relative;
    bottom: -4px;
  }
  &__item-5 {
    grid-area: 2 / 2 / 3 / 3;
    position: relative;
    bottom: -4px;
  }
  &__item-6 {
    grid-area: 2 / 3 / 3 / 4;
    position: relative;
    bottom: -4px;
  }
  &__item-7 {
    grid-area: 3 / 1 / 4 / 2;
    margin-top: -7px;
  }
  &__item-8 {
    grid-area: 3 / 2 / 4 / 3;
    margin-top: -7px;
  }
  &__item-9 {
    grid-area: 3 / 3 / 4 / 4;
    margin-top: -7px;
  }

  &__actions {
    margin-top: 15px;
    margin-bottom: 24px;
    display: flex;
    gap: 20px;
  }
}
</style>
