<template>
  <div class="wallets-fees">
    <div class="wallets-fees__item">
      <fees-tier />
    </div>
    <div class="wallets-fees__item wallets-fees__item--table regular-table">
        <p class="wallets-fees__item-title">Tiers for Regular users</p>
        <v-data-table
          :headers="tiersRegular"
          :items="tiersRegularData"
          item-key="name"
          hide-default-footer
        ></v-data-table>
    </div>
    <div class="wallets-fees__item wallets-fees__item--table">
      <p class="wallets-fees__item-title">Tiers for VIP users</p>
      <v-data-table
        :headers="tiersVip"
        :items="tiersVipData"
        item-key="name"
        hide-default-footer
      ></v-data-table>
    </div>
  </div>
</template>

<script>
import FeesTier from "@/components/wallets/FeesTier";
export default {
  components: {FeesTier},

  data() {
    return {
      tiersRegular: [
        {
          text: 'Tier',
          value: 'tier',
          sortable: false,
          class: 'wallets-fees__th',
          cellClass: 'wallets-fees__cell',
        },
        {
          text: 'Total TBCC holding',
          value: 'totalHolding',
          sortable: false,
          align: 'center',
          class: 'wallets-fees__th',
          cellClass: 'wallets-fees__cell',
        },
        {
          text: '30-day trading volume (USD)',
          value: 'tradingVolume',
          sortable: false,
          align: 'center',
          class: 'wallets-fees__th',
          cellClass: 'wallets-fees__cell',
        },
        {
          text: 'Maker / Taker fee',
          value: 'fee',
          sortable: false,
          align: 'center',
          class: 'wallets-fees__th',
          cellClass: 'wallets-fees__cell',
        },
        {
          text: '24h withdrawal limit',
          value: 'limit',
          sortable: false,
          align: 'center',
          class: 'wallets-fees__th',
          cellClass: 'wallets-fees__cell',
        }
      ],
      tiersRegularData: [
        {
          tier: 'Lv 1',
          totalHolding: '< 500',
          tradingVolume: '< 10,000,000',
          fee: '0.080% / 0.100%',
          limit: '50'
        },
        {
          tier: 'Lv 2',
          totalHolding: '≥ 500',
          tradingVolume: '< 10,000,000',
          fee: '0.075% / 0.095%',
          limit: '50'
        },
        {
          tier: 'Lv 3',
          totalHolding: '≥  1,000',
          tradingVolume: '< 10,000,000',
          fee: '0.070% / 0.090%',
          limit: '50'
        },        {
          tier: 'Lv 4',
          totalHolding: '≥  1,500',
          tradingVolume: '< 10,000,000',
          fee: '0.065% / 0.085%',
          limit: '50'
        },
        {
          tier: 'Lv 5',
          totalHolding: '≥  2,000',
          tradingVolume: '< 10,000,000',
          fee: '0.060% / 0.080%',
          limit: '50'
        }
      ],
      tiersVip: [
        {
          text: 'Tier',
          value: 'tier',
          sortable: false,
          class: 'wallets-fees__th',
          cellClass: 'wallets-fees__cell',
        },
        {
          text: '30-day trading volume (USD)',
          value: 'tradingVolume',
          sortable: false,
          align: 'center',
          class: 'wallets-fees__th',
          cellClass: 'wallets-fees__cell',
        },
        {
          text: 'Maker / Taker fee',
          value: 'fee',
          sortable: false,
          align: 'center',
          class: 'wallets-fees__th',
          cellClass: 'wallets-fees__cell',
        },
        {
          text: '24h withdrawal limit',
          value: 'limit',
          sortable: false,
          align: 'center',
          class: 'wallets-fees__th',
          cellClass: 'wallets-fees__cell',
        }
      ],
      tiersVipData: [
        {
          tier: 'VIP 1',
          tradingVolume: '< 10,000,000',
          fee: '0.055% / 0.060%',
          limit: '200'
        },
        {
          tier: 'VIP 2',
          tradingVolume: '< 10,000,000',
          fee: '0.030% / 0.035%',
          limit: '500'
        },
        {
          tier: 'VIP 3',
          tradingVolume: '< 10,000,000',
          fee: '0.015% / 0.020%',
          limit: '1,000'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.wallets-fees__th {
  color: #2F385E !important;
  font-size: 13px !important;
  opacity: 0.6 !important;
  border-bottom: none !important;
}

.wallets-fees__cell {
  font-size: 14px;
  color: #2F385E;
  border-bottom: none !important;
}
</style>

<style lang="scss" scoped>
.wallets-fees {
  &__item {
    padding: 25px 40px;
    border: 1px solid rgba(47, 56, 94, 0.1);
    border-radius: 6px;
    max-width: 782px;

    &--table {
      padding: 25px 24px;
    }

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__item-title {
    font-size: 24px;
    line-height: 28px;
    color: #2F385E;
    margin-bottom: 14px;
    padding-left: 14px;
  }
}

.regular-table::v-deep {
  tbody {
    tr:nth-child(1) {
      background: rgba(0, 102, 255, 0.05);

      td {
        border-bottom: 1px solid #0066FF !important;
        border-top: 1px solid #0066FF;
        border-radius: 0 !important;

        &:first-child {
          border-left: 1px solid #0066FF;
        }

        &:last-child {
          border-right: 1px solid #0066FF;
        }
      }
    }
  }
}
</style>

