<template>
  <v-data-table
    :headers="headers"
    :items="data"
    hide-default-footer
    class="open-orders-table"
  >
    <template #[`item.side`]="{ item }">
        <span :class="{'text-sell': item.side === 'Sell', 'text-buy': item.side === 'Buy'}">{{ item.side }}</span>
    </template>
    <template #[`item.price`]="{ item }">
      {{item.price}} USDT
    </template>
    <template #[`item.filled`]="{ item }">
      {{item.filled}} %
    </template>
    <template #[`item.total`]="{ item }">
      {{item.total}} USDT
    </template>
    <template #[`item.cancel`]="{ item }">
      <cancel-button :cancel-id="item.cancel" @click="logId" />
    </template>
  </v-data-table>
</template>

<script>
import CancelButton from "@/components/common/CancelButton";
export default {
  components: {CancelButton},
  data () {
    return {
      headers: [
        { text: 'Date', value: 'date', cellClass: 'open-orders-table__cell'},
        { text: 'Pair', sortable: false, value: 'pair', cellClass: 'open-orders-table__cell' },
        { text: 'Type',  sortable: false, value: 'type', cellClass: 'open-orders-table__cell' },
        { text: 'Side',  sortable: false, value: 'side', cellClass: 'open-orders-table__cell' },
        { text: 'Price', value: 'price', cellClass: 'open-orders-table__cell' },
        { text: 'Amount', value: 'amount', cellClass: 'open-orders-table__cell' },
        { text: 'Filled', value: 'filled', cellClass: 'open-orders-table__cell' },
        { text: 'Total', value: 'total', cellClass: 'open-orders-table__cell' },
        { text: 'Trigger Conditions',  sortable: false, value: 'trigger' },
        { text: 'Cancel All',  sortable: false, value: 'cancel', class: 'open-orders-table__cancel-header', cellClass: 'open-orders-table__cancel-cell' },
      ],
      data: [
        {
          date: '05-07 01:01:50',
          pair: 'ALICE/USDT',
          type: 'Limit',
          side: 'Sell',
          price: 8.402,
          amount: 366.22,
          filled: 0.00,
          total: 3076.24,
          trigger: '.',
          cancel: '1',
        },
        {
          date: '06-07 05:04:45',
          pair: 'BTC/USDT',
          type: 'Limit',
          side: 'Buy',
          price: 45695,
          amount: 0.2155,
          filled: 0.00,
          total: 8984.04,
          trigger: '.',
          cancel: '2',
        },
        {
          date: '08-07 07:58:12',
          pair: 'XRP/USDT',
          type: 'Limit',
          side: 'Sell',
          price: 0.86,
          amount: 2.000,
          filled: 0.00,
          total: 1720.00,
          trigger: '.',
          cancel: '3',
        },
      ],
    }
  },

  methods: {
    logId(id) {
      console.log(id)
    }
  }
}
</script>

<style lang="scss">
.open-orders-table {
  th {
    letter-spacing: -0.41px !important;
    font-weight: 500 !important;
    font-size: 13px !important;
  }

  &__cell {
    font-weight: 500;
    font-size: 13px;
    letter-spacing: -0.41px;
    color: rgba(22, 28, 47, 0.6);
  }

  &__cancel-cell,
  &__cancel-header {
    display: flex;
    justify-content: end;
    align-items: center;
  }
}

.text-buy {
  color: #20C997;
}

.text-sell {
  color: #FF6B6B;
}


</style>
