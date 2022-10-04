<template>
  <div class="dashboard">
    <div class="dashboard__main">
      <dashboard-chart class="dashboard__chart" />
      <assets-tablet class="dashboard__tablet" :table-data="balances" />
    </div>
    <div class="dashboard__side">
      <dashboard-slider class="dashboard__side-item" />
      <expansion-account class="dashboard__side-item" />
      <expansion-limits class="dashboard__side-item" />
      <expansion-announcements class="dashboard__side-item" />
      <expansion-services />
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import DashboardChart from '@/components/dashboard/DashboardChart'
import AssetsTablet from '@/components/dashboard/AssetsTablet'
import DashboardSlider from '@/components/dashboard/DashboardSlider'
import ExpansionAccount from '@/components/dashboard/ExpansionAccount'
import ExpansionLimits from '@/components/dashboard/ExpansionLimits'
import ExpansionAnnouncements from '@/components/dashboard/ExpansionAnnouncements'
import ExpansionServices from '@/components/dashboard/ExpansionServices'
export default {
  components: {
    ExpansionServices,
    ExpansionAnnouncements,
    ExpansionLimits,
    ExpansionAccount,
    DashboardSlider,
    AssetsTablet,
    DashboardChart,
  },
  layout: 'dashboard',
  middleware: ['auth'],
  data() {
    return {
      coins: [
        {
          asset: { name: 'ustd', fullName: 'Tether' },
          balance: { coins: '4,320.00', usd: '4325.25' },
          percent: '60.16',
          actions: {menu: false},
        },
        {
          asset: { name: 'btc', fullName: 'Bitcoin' },
          balance: { coins: '0.09', usd: '1294.94' },
          percent: '20.28',
          actions: {menu: false},
        },
        {
          asset: { name: 'eth', fullName: 'Ethereum' },
          balance: { coins: '0.21000458', usd: '387.94' },
          percent: '7.65',
          actions: {menu: false},
        },
        {
          asset: { name: 'ltc', fullName: 'Litecoin' },
          balance: { coins: '1.09', usd: '118.54' },
          percent: '4.09',
          actions: {menu: false},
        },
        {
          asset: { name: 'tbcc', fullName: 'TBCC' },
          balance: { coins: '200.09', usd: '28.94' },
          percent: '2.98',
          actions: {menu: false},
        },
        {
          asset: { name: 'bch', fullName: 'Bitcoin Cash' },
          balance: { coins: '0.00', usd: '0.00' },
          percent: '0.0',
          actions: {menu: false},
        },
        {
          asset: { name: 'bsv', fullName: 'Bitcoin SV' },
          balance: { coins: '0.00', usd: '0.00' },
          percent: '0.0',
          actions: {menu: false},
        },
        {
          asset: { name: 'aave', fullName: 'Aave' },
          balance: { coins: '0.00', usd: '0.00' },
          percent: '0.0',
          actions: {menu: false},
        },
        {
          asset: { name: 'act', fullName: 'Achain' },
          balance: { coins: '0.00', usd: '0.00' },
          percent: '0.0',
          actions: {menu: false},
        }
      ],
    }
  },

  computed: {
    ...mapGetters({getBalances: 'user/getBalances'}),

    balances() {
      if(!this.getBalances) {
        return []
      }
      return Object.values(this.getBalances).map(coin => {
        return {
          asset: {
            name: coin.currency,
            fullName: coin.name
          },
          balance: {coins: String(coin.available), usd: '0.00'},
          percent: '0.0',
          actions: {menu: false}
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 0;

  &__main {
    padding: 20px 40px;
    border-radius: 10px;
    background: #ffffff;
    grid-area: auto / 1 / auto / 10;
    width: 100%;
  }

  &__tablet {
    min-height: 763px;
  }

  &__side {
    min-width: 335px;
    grid-area: auto / 10 / auto / 13;
  }

  &__side-item {
    margin-bottom: 17px;
  }
}
</style>
