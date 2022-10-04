<template>
  <v-card flat>
    <v-card-title class="pl-4 pr-0 d-flex align-center mainColor">
      {{ hiddenTitle ? '' :  'My Assets' }}
      <v-checkbox
        v-model="checkboxNotZero"
        :label="`hide zero balances`"
        :class="['mt-0', {'ml-6': !hiddenTitle}]"
        hide-details
        dense
      ></v-checkbox>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        label="Search"
        single-line
        hide-details
        outlined
        dense
        prepend-inner-icon="mdi-magnify"
        style="max-width: 230px"
      >
      </v-text-field>
    </v-card-title>
    <v-data-table
      :mobile-breakpoint="0"
      hide-default-footer
      :headers="headers"
      :items="filteredCoins"
      loading="false"
      loading-text="Loading... Please wait"
      disable-pagination
    >
      <template #[`item.asset`]="{ item }">
        <div class="asset-slot">
          <img
            :src="getCoinImg(item.asset.name)"
            alt=""
            width="28"
            height="28"
            class="asset-slot__img"
          />
          <div>
            <p class="asset-slot__name">{{ item.asset.name }}</p>
            <p class="asset-slot__full-name">{{ item.asset.fullName }}</p>
          </div>
        </div>
      </template>
      <template #[`item.balance`]="{ item }">
        <p class="balance-slot__coins">{{ item.balance.coins }}</p>
        <p class="balance-slot__usd">${{ item.balance.usd }}</p>
      </template>
      <template #[`item.percent`]="{ item }">
        <p class="balance-slot__percent">{{ item.percent }}%</p>
      </template>
      <template #[`item.actions`]="{ item }">

        <v-menu v-model="item.menu" transition="slide-y-transition" close-on-click offset-y bottom left rounded="10px">
          <template #activator="{ on }">
            <v-btn text icon v-on="on" class="actions-slot">
              <v-icon> mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
          <v-list dense >
            <v-list-item-group>
              <v-list-item  v-for="(item, index) in actions" :key="index" >
                <v-list-item-title class="assets-tablet__actions-btn">
                  {{item}}
                </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import USDT from '../../assets/images/cryptocurrencies/ustd-icon.svg'
import BTC from '../../assets/images/cryptocurrencies/btc-icon.svg'
import ETH from '../../assets/images/cryptocurrencies/eth-icon.svg'
import LTC from '../../assets/images/cryptocurrencies/ltc-icon.svg'
import TBCC from '../../assets/images/cryptocurrencies/tbcc-icon2.svg'
import BCH from '../../assets/images/cryptocurrencies/bch-icon.svg'
import BSV from '../../assets/images/cryptocurrencies/bsv-icon.svg'
import AAVE from '../../assets/images/cryptocurrencies/aave-icon.png'
import ACT from '../../assets/images/cryptocurrencies/act-icon.png'
export default {
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    hiddenTitle: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      actions: ['Deposit', 'Withdraw', 'Transfer'],
      checkboxNotZero: false,
      search: '',
      headers: [
        {
          text: 'Asset',
          align: 'start',
          sortable: false,
          value: 'asset',
        },
        {
          text: 'Balance',
          value: 'balance',
          sort: (a, b) => {
            if (parseInt(a.usd) === parseInt(b.usd)) {
              return 0
            }
            return parseInt(a.usd) > parseInt(b.usd) ? 1 : -1
          },
        },
        { text: '% of portfolio', value: 'percent' },
        { text: '', value: 'actions', align: 'end', sortable: false },
      ],
    }
  },
  computed: {
    filteredCoins() {
      if (this.checkboxNotZero) {
        const notZeroCoins = this.tableData.filter(
          (item) => item.balance.usd !== '0.00'
        )
        return this.sortingBySearch(notZeroCoins)
      }
      return this.sortingBySearch(this.tableData)
    },
  },

  methods: {
    sortingBySearch(data) {
      return data.filter(({ asset, balance, percent }) => {
        const normalizeSearch = this.search.toLowerCase()
        return `${asset.name.toLowerCase()} ${asset.fullName.toLowerCase()} ${balance.coins.toLowerCase()} ${balance.usd.toLowerCase()} ${percent.toLowerCase()}`.includes(
          normalizeSearch
        )
      })
    },

    getCoinImg(name) {
      const coinsImages = {
        USDT,
        BTC,
        ETH,
        LTC,
        TBCC,
        BCH,
        BSV,
        AAVE,
        ACT,
      }
      return coinsImages[name]
    }
  },
}
</script>

<style lang="scss">
.assets-tablet__actions-btn {
  padding: 0 4px;
  font-size: 16px !important;
  color: #2F385E;
}
</style>
