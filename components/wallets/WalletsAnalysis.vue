<template>
  <div class="wallets-analysis">
    <div class="wallets-analysis__filters">
      <div class="wallets-analysis__filters-item">
        <v-autocomplete
          ref="country"
          v-model="asset"
          class="wallets-analysis__input"
          :items="assets"
          label="View assets"
          placeholder="Select assets"
          persistent-placeholder
          hide-details
        ></v-autocomplete>
      </div>
      <div class="wallets-analysis__filters-item">
        <p class="wallets-analysis__input-label">Period</p>
        <date-picker
          v-model="date"
          type="date"
          prefix-class="xmx"
          range
          value-type="timestamp"
          placeholder="Select date range"
        ></date-picker>
      </div>
    </div>
    <div class="wallets-analysis__statistics statistics">
      <div
        v-for="(item, index) in statistics"
        :key="index"
        class="statistics__item"
      >
        <p class="statistics__title">{{ item.title }}</p>
        <p class="statistics__value">
          {{ item.value }}
          <span class="statistics__percent">
            {{ item.percent ? item.percent : '' }}
          </span>
        </p>
      </div>
    </div>
    <p class="wallets-analysis__statistics-update">Updated:08/22/2022, 13:36</p>
    <div class="wallets-analysis__items">
      <div class="wallets-analysis__item">
        <cumulative-chart />
      </div>
      <div class="wallets-analysis__item">
        <profits-chart />
      </div>
      <div class="wallets-analysis__item">
        <pnl-chart />
      </div>
      <div class="wallets-analysis__item">
        <total-chart />
      </div>
    </div>

  </div>
</template>

<script>
import CumulativeChart from "@/components/wallets/CumulativeChart";
import ProfitsChart from "@/components/wallets/ProfitsChart";
import PnlChart from "@/components/wallets/PnlChart";
import TotalChart from "@/components/wallets/TotalChart";
export default {
  components: {TotalChart, PnlChart, ProfitsChart, CumulativeChart},
  data() {
    return {
      date: [],
      assets: ['Overview'],
      asset: null,
      statistics: [
        {
          title: 'Daily PnL',
          value: '$98.54',
          percent: '+2.04%',
        },
        {
          title: 'Monthly PnL',
          value: '$485.32',
          percent: '+7.25%',
        },
        {
          title: 'Estimated balance',
          value: '$6,392.56',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.wallets-analysis {

  &__items {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }

  &__item {
    padding: 25px 30px 25px 20px;
    border: 1px solid rgba(47, 56, 94, 0.1);
    border-radius: 6px;
    max-width: calc((100% - 40px) / 2);
    width: 100%;
  }

  &__filters {
    display: flex;
    align-items: end;
    gap: 30px;
    margin-bottom: 55px;
  }

  &__filters-item {
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
