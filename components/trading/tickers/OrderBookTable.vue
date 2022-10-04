<template>
  <div class="bid-list-table-absolute-wrapper">
    <v-simple-table class="bid-list__content__table" dense fixed-header>
      <template #default>
        <bid-list-table-header :currency="currency" :market="market" />
        <ask-list-table-body
          :orders-data="test2"
          :amount-depth="amountDepth"
          :volume-depth="volumeDepth"
          :best="best"
          :currency="currency"
          :market="market"
        />
      </template>
    </v-simple-table>
    <bid-stat />
    <v-simple-table>
      <template #default>
        <bid-list-table-body
          :orders-data="test"
          :amount-depth="amountDepth"
          :volume-depth="volumeDepth"
          :best="best"
          :currency="currency"
          :market="market"
        />
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import BidListTableBody from '@/components/trading/orders/bid/table/BidListTableBody'
import BidListTableHeader from '@/components/trading/orders/bid/table/BidListTableHeader'
import AskListTableBody from '@/components/trading/orders/ask/table/AskListTableBody'
import BidStat from '@/components/trading/orders/bid/table/BidStat'

export default {
  name: 'BidListTableWrapper',

  components: {
    BidStat,
    AskListTableBody,
    BidListTableHeader,
    BidListTableBody,
  },

  props: {
    currency: {
      type: String,
      default: 'TBCC',
    },
    market: {
      type: String,
      default: 'USDT',
    },
    amountDepth: {
      type: Number,
    },
    volumeDepth: {
      type: Number,
    },
    best: {
      type: Number,
    },
  },

  data() {
    return {
      test: [
        {
          actualSize: 10,
          price: 0.048,
        },
        {
          actualSize: 131,
          price: 0.0451,
        },
        {
          actualSize: 20,
          price: 0.045,
        },
        {
          actualSize: 10,
          price: 0.043,
        },
        {
          actualSize: 129,
          price: 0.042,
        },
        {
          actualSize: 10,
          price: 0.041,
        },
        {
          actualSize: 100,
          price: 0.0401,
        },
        {
          actualSize: 14,
          price: 0.0394,
        },
        {
          actualSize: 10,
          price: 0.038,
        },
        {
          actualSize: 10,
          price: 0.037,
        },
        {
          actualSize: 15,
          price: 0.0368,
        },
        {
          actualSize: 15,
          price: 0.0344,
        },
        {
          actualSize: 16,
          price: 0.0321,
        },
        {
          actualSize: 17,
          price: 0.03,
        },
        {
          actualSize: 18,
          price: 0.0281,
        },
      ],
      test2: [
        {
          actualSize: 127,
          price: 0.0559,
        },
        {
          actualSize: 30.8,
          price: 0.056,
        },
        {
          actualSize: 170,
          price: 0.058,
        },
        {
          actualSize: 111,
          price: 0.059,
        },
        {
          actualSize: 10,
          price: 0.0591,
        },
        {
          actualSize: 313,
          price: 0.06,
        },
        {
          actualSize: 10,
          price: 0.0632,
        },
        {
          actualSize: 10,
          price: 0.0677,
        },
        {
          actualSize: 10,
          price: 0.0724,
        },
        {
          actualSize: 10,
          price: 0.0775,
        },
        {
          actualSize: 10,
          price: 0.0829,
        },
        {
          actualSize: 10,
          price: 0.0887,
        },
        {
          actualSize: 100,
          price: 0.09,
        },
      ],
    }
  },
}
</script>

<style scoped lang="sass"></style>
