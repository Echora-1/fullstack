<template>
  <div class="orders-filter">
    <div class="orders-filter__item">
      <p class="orders-filter__input-label">Date</p>
      <date-picker
        v-model="date"
        type="date"
        prefix-class="xmx"
        range
        value-type="timestamp"
        placeholder="Select date range"
      ></date-picker>
    </div>
    <div class="orders-filter__item">
      <v-autocomplete
        ref="country"
        v-model="type"
        class="orders-filter__input"
        :items="types"
        label="Order type"
        placeholder="Type"
        persistent-placeholder
        hide-details
      ></v-autocomplete>
    </div>
    <div class="orders-filter__item">
      <v-autocomplete
        ref="country"
        v-model="instrument"
        class="orders-filter__input"
        :items="instruments"
        label="Instrument"
        placeholder="Type"
        persistent-placeholder
        hide-details
      ></v-autocomplete>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: [],
      types: ['Limit/Market'],
      type: null,
      instruments: ['All'],
      instrument: null
    }
  },
}
</script>


<style lang="scss" scoped>
.orders-filter {
    display: flex;
    align-items: end;
    gap: 30px;
    margin-bottom: 55px;

  &__item {
    max-width: 280px;
    width: 100%;
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

  &__input-label {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.41px;
    color: #2f385e;
    margin: 0 0 6px;
  }

  &__statistics {
    display: flex;
    padding-bottom: 28px;
  }

  &__statistics-update {
    font-size: 13px;
    line-height: 28px;
    color: #2F385E;
    opacity: 0.6;
    margin-bottom: 40px;
  }
}

.statistics {
  display: flex;
  gap: 40px;

  &__item {
    color: #2f385e;
    position: relative;
    padding-left: 24px;

    &::before {
      content: '';
      position: absolute;
      width: 4px;
      height: calc(100% - 8px);
      left: 2px;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(47, 56, 94, 0.15);
      border-radius: 8px;
    }
  }

  &__title {
    font-size: 20px;
    line-height: 20px;
    letter-spacing: -0.41px;
    margin: 0 0 10px;
  }

  &__value {
    font-weight: 600;
    font-size: 30px;
    line-height: 30px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin: 0 !important;
  }

  &__percent {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.41px;
    color: #20c997;
  }
}
</style>
