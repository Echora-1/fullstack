<template>
  <v-data-table
    :headers="headers"
    :items="dataTable"
    hide-default-footer
    :mobile-breakpoint="0"
    class="transactions-table"
  >
    <template #[`item.date`]="{ item }">
          {{ formatDate(item.date, 'trading') }}
    </template>
    <template #[`item.type`]="{ item }">
      <span :class="{'transactions-table__type--deposit': item.type === 'Deposit'}"
        >{{ item.type }}</span
      >
    </template>
    <template #[`item.status`]="{ item }">
      <span :class="{'transactions-table__status--executed': item.status === 'Executed'}">
        {{ item.status }}
      </span>
    </template>
  </v-data-table>
</template>

<script>

import formatDate from "@/mixins/format/formatDate";

export default {
  mixins: [formatDate],
  props: {
    dataTable: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      headers: [
        { text: 'ID', value: 'transactionId',  sortable: false, cellClass: 'transactions-table__cell' },
        {
          text: 'Date',
          value: 'date',
          cellClass: 'transactions-table__cell',
        },
        {
          text: 'Type',
          sortable: false,
          value: 'type',
          cellClass: 'transactions-table__cell',
        },
        {
          text: 'Currency',
          sortable: false,
          value: 'currency',
          cellClass: 'transactions-table__cell',
        },
        {
          text: 'Amount',
          value: 'amount',
          cellClass: 'transactions-table__cell',
        },
        {
          text: 'Address',
          sortable: false,
          value: 'address',
          cellClass: 'transactions-table__cell',
        },
        {
          text: 'Transaction hash',
          sortable: false,
          value: 'transactionHash',
          cellClass: 'transactions-table__cell',
        },
        {
          text: 'Approves',
          sortable: false,
          value: 'approves',
          cellClass: 'transactions-table__cell',
        },
        { text: 'Status', sortable: false,  value: 'status' },
      ],
    }
  },

}
</script>


<style lang="scss">
.transactions-table {
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

  &__cancel-header {
    display: flex;
    justify-content: end;
    align-items: center;
  }

  &__type {
    &--deposit {
      color: #20C997;
    }
  }

  &__status {
    &--executed {
      color: #20C997;
    }
  }
}


</style>
