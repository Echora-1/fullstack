<template>
  <div class="referral-payments">
    <v-expansion-panels
      v-model="panel"
      multiple
      flat
      class="referral-payments__filters"
    >
      <v-expansion-panel>
        <v-expansion-panel-header><span class="referral-payments__filter-title">Filters <icon-filter /></span></v-expansion-panel-header>
        <v-expansion-panel-content>
          <referral-payments-filter @set-filters="setFilters" @reset-filters="resetFilters"  class="transactions__filters-form"/>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <div class="referral-payments__table-wrap">
      <p class="referral-payments__title">Referral payments</p>
      <referral-payments-table :data-table="filteredTransactions" />
    </div>
  </div>
</template>

<script>
import IconFilter from "@/components/icon/IconFilter";
import ReferralPaymentsFilter from "@/components/referralPayments.vue/ReferralPaymentsFilter";
import ReferralPaymentsTable from "@/components/referralPayments.vue/ReferralPaymentsTable";

export default {
  components: {ReferralPaymentsTable, ReferralPaymentsFilter, IconFilter},
  layout: 'dashboard',
  middleware: ['auth'],
  data() {
    return {
      panel: [],
      transactions: [
        {
          referralId: '32212',
          date: '1661878690000',
          referral: 'tonyADS',
          percent: '3',
          currency: 'TRX',
          amount: 25.00000000,
        },
        {
          referralId: '355543',
          date: '1662969490000',
          referral: 'leeROI',
          percent: '1.5',
          currency: 'TBCC',
          amount: 13.00000000,
        },
        {
          referralId: '374312',
          date: '1662375490000',
          referral: 'gogi7',
          percent: '2',
          currency: 'TBCC',
          amount: 48.50000000,
        },
        {
          referralId: '314543',
          date: '1662562690000',
          referral: 'forexgump',
          percent: '0.8',
          currency: 'TBCC',
          amount: 18.00000000,
        },
        {
          referralId: '394312',
          date: '1662793090000',
          referral: 'yeee94',
          percent: '2',
          currency: 'TRX',
          amount: 85.10000000,
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
.referral-payments {
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
