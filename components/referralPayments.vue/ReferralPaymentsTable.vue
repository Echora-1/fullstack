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
    <template #[`item.percent`]="{ item }">
        {{ item.percent }}%
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
        { text: 'ID', value: 'referralId',  sortable: false, cellClass: 'transactions-table__cell' },
        {
          text: 'Date',
          sortable: false,
          value: 'date',
          cellClass: 'transactions-table__cell',
        },
        {
          text: 'Referral',
          sortable: false,
          value: 'referral',
          cellClass: 'transactions-table__cell',
        },
        {
          text: 'Percent, %',
          sortable: false,
          value: 'percent',
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
          sortable: false,
          value: 'amount',
          cellClass: 'transactions-table__cell',
        },
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
