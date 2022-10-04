<template>
  <div class="open-orders">
    <orders-filter class="open-orders__filter" />
    <div class="open-orders__item">
      <p class="open-orders__item-title">Orders</p>
      <v-data-table
        :headers="headers"
        :items="dataTable"
        hide-default-footer
        :mobile-breakpoint="0"
        class="open-orders__table"
      >
      </v-data-table>
    </div>
  </div>
</template>
<script>
import OrdersFilter from "@/components/orders/OrdersFilter";
export default {
  components: {OrdersFilter},
  data() {
    return {
      headers: [
        { text: 'ID', value: 'transactionId',  sortable: false, cellClass: 'open-orders__cell' },
        {
          text: 'Date',
          value: 'date',
          cellClass: 'open-orders__cell',
        },
        {
          text: 'Type',
          sortable: false,
          value: 'type',
          cellClass: 'open-orders__cell',
        },
        {
          text: 'Currency',
          sortable: false,
          value: 'currency',
          cellClass: 'open-orders__cell',
        },
        {
          text: 'Amount',
          value: 'amount',
          cellClass: 'open-orders__cell',
        },
        {
          text: 'Address',
          sortable: false,
          value: 'address',
          cellClass: 'open-orders__cell',
        },
        {
          text: 'Transaction hash',
          sortable: false,
          value: 'transactionHash',
          cellClass: 'open-orders__cell',
        },
        {
          text: 'Approves',
          sortable: false,
          value: 'approves',
          cellClass: 'open-orders__cell',
        },
        { text: 'Status', sortable: false,  value: 'status' },
      ],
      dataTable: []
    }
  }
}
</script>

<style lang="scss">
.open-orders {
  &__filter {
    margin-bottom: 42px;
  }

  &__item {
    padding: 25px 40px;
    border: 1px solid rgba(47, 56, 94, 0.1);
    border-radius: 6px;
    max-width: 1028px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__item-title {
    font-size: 24px;
    line-height: 28px;
    color: #2F385E;
    margin-bottom: 14px;
  }

  &__table {
    th {
      letter-spacing: -0.41px !important;
      font-weight: 500 !important;
      font-size: 13px !important;
      color: #2F385E !important;
      opacity: 0.6 !important;

      &:first-child {
        padding-left: 0 !important;
      }
    }

    td {
      border-bottom: none !important;
    }

    &__cell {
      font-size: 13px;
      letter-spacing: -0.41px;
      color: #2F385E;

      &:first-child {
        padding-left: 0 !important;
      }
    }
  }
}
</style>
