<template>
  <v-data-table
    :headers="headers"
    :items="dataTable"
    hide-default-footer
    hide-default-header
    :mobile-breakpoint="0"
    class="recent-transactions-table"
  >
    <template #[`item.type`]="{ item }">
      <div class="recent-transactions-table__type">
        <wallets-icon-transactions-type
          :class="{
            'recent-transactions-table__type-withdraw-icon':
              item.type.value === 'withdraw',
          }"
        />
        <div>
          <p class="recent-transactions-table__type-value">
            {{ item.type.value | capitalize }}
          </p>
          <p class="recent-transactions-table__type-date">
            {{ formatDate(item.type.date, 'trading') }}
          </p>
        </div>
      </div>
    </template>
    <template #[`item.value`]="{ item }">
      <div class="recent-transactions-table__value-wrap">
        <p class="recent-transactions-table__value">
          {{ item.type.value === 'withdraw' ? '- ' : '+ '
          }}{{ item.value.value }}
        </p>
        <p
          :class="[
            'recent-transactions-table__status',
            {
              'recent-transactions-table__status--cancelled':
                item.value.status === 'cancelled',
            },
          ]"
        >
          {{ item.value.status | capitalize }}
        </p>
      </div>
    </template>
  </v-data-table>
</template>

<script>
import WalletsIconTransactionsType from '@/components/icon/wallets/WalletsIconTransactionsType'
import formatCapitalize from '@/mixins/format/formatCapitalize'
import formatDate from "@/mixins/format/formatDate";
export default {
  components: { WalletsIconTransactionsType },
  mixins: [formatCapitalize, formatDate],
  props: {
    dataTable: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      headers: [
        {
          text: '',
          value: 'type',
          cellClass: 'recent-transactions-table__cell',
        },
        {
          text: '',
          value: 'value',
          cellClass: 'recent-transactions-table__cell',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.recent-transactions-table {
  &__cell {
    font-size: 16px !important;
    line-height: 58px;
    color: #2f385e;
    border-bottom: none !important;
    height: 55px !important;

    &:first-child {
      padding-left: 0 !important;
    }

    &:last-child {
      padding-right: 0 !important;
    }
  }

  &__type {
    display: flex;
    align-items: center;

    svg {
      margin: auto 12px auto 0;
    }
  }

  &__type-value,
  &__type-date,
  &__value,
  &__status {
    line-height: 135% !important;
  }

  &__type-value,
  &__value {
    font-size: 16px;
    margin-bottom: 5px !important;
  }

  &__type-date {
    opacity: 0.4;
    font-size: 12px;
    margin: 0 !important;
  }

  &__type-withdraw-icon {
    transform: scale(1, -1);
  }

  &__value-wrap {
    text-align: end !important;
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  &__value {
    font-weight: 500;
    text-align: end;
    display: inline-flex;
  }

  &__status {
    color: #2f385e99;
    font-size: 13px;
    margin: 0 !important;
    display: inline-flex;
    position: relative;
    padding-left: 10px;

    &::before {
      position: absolute;
      content: '';
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 5px;
      height: 5px;
      background: #20c997;
      border-radius: 50%;
    }

    &--cancelled {
      &::before {
        background: #ff6b6b;
      }
    }
  }
}
</style>
