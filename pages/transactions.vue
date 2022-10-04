<template>
  <div class="transactions">
    <v-expansion-panels
      v-model="panel"
      multiple
      flat
      class="transactions__filters"
    >
      <v-expansion-panel>
        <v-expansion-panel-header><span class="transactions__filter-title">Filters <icon-filter /></span></v-expansion-panel-header>
        <v-expansion-panel-content>
          <transactions-filters-form @set-filters="setFilters" @reset-filters="resetFilters"  class="transactions__filters-form"/>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <div class="transactions__table-wrap">
      <p class="transactions__title">Recent Transactions</p>
      <transactions-table :data-table="filteredTransactions" />
    </div>
  </div>
</template>

<script>
import TransactionsTable from "@/components/transactions/TransactionsTable";
import IconFilter from "@/components/icon/IconFilter";
import TransactionsFiltersForm from "@/components/transactions/TransactionsFiltersForm";
export default {
  components: {TransactionsFiltersForm, IconFilter, TransactionsTable},
  layout: 'dashboard',
  middleware: ['auth'],
  data() {
    return {
      panel: [],
      transactions: [
        {
          transactionId: '56',
          date: '1659791839000',
          type: 'Deposit',
          currency: 'TBCC',
          amount: 50,
          address: '0x113...96a',
          transactionHash: '0x41a...bf1',
          approves: 4,
          status: 'Executed',
        },
        {
          transactionId: '57',
          date: '1662297439000',
          type: 'Deposit',
          currency: 'BTC',
          amount: 0.25847335,
          address: '0x113...42b',
          transactionHash: '0x41a...as2',
          approves: 4,
          status: 'Executed',
        },
      ],
      currentFilter: {}
    }
  },

  computed: {
    filteredTransactions() {
      const keysActiveFilters = Object.keys(this.currentFilter)
      return this.transactions.filter(item => {
        for(const key of keysActiveFilters) {
          if(key === 'date') {
            return  this.currentFilter[key][0] <= parseInt(item[key]) &&  parseInt(item[key]) <= this.currentFilter[key][1]
          }
          if(!item[key].includes(this.currentFilter[key])) {
            return false
          }
        }
        return true
      })
    }
  },

  methods: {
    setFilters(filters) {
      const activeFilters = Object.fromEntries(Object.entries(filters).filter(([key, value]) => {
        if(Array.isArray(value)) {
         return  value.length > 0
        }
        return value !== null
      }))
      this.currentFilter = activeFilters
    },

    resetFilters() {
      this.currentFilter = {}
    }
  }
}
</script>

<style lang="scss" scoped>
.transactions {
  background: #FFFFFF;
  border-radius: 10px;
  width: 100%;
  min-height: 620px;
  padding: 46px 50px;

  &__filters {
    border: 1px solid rgba(47, 56, 94, 0.1);
    border-radius: 6px;
    margin-bottom: 36px;
  }

  &__filters-form {
    padding-top: 15px;
  }

  &__table-wrap {
    border: 1px solid rgba(47, 56, 94, 0.1);
    border-radius: 6px;
    padding: 16px 24px;
  }

  &__filter-title {
    display: inline-flex;
    align-items: center;

    svg {
      margin-left: 8px;
    }
  }

  &__filter-title,
  &__title {
    font-size: 24px;
    line-height: 28px;
    color: #2F385E;
  }

}
</style>
