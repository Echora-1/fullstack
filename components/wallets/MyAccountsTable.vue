<template>
  <v-data-table
    :headers="headers"
    :items="dataTable"
    hide-default-footer
    hide-default-header
    :mobile-breakpoint="0"
    class="my-accounts-table"
  >
    <template #[`item.type`]="{ item }">
      <div class="my-accounts-table__type">
        <wallets-icon-safe v-if="item.type === 'Safe'" />
        <wallets-icon-trade v-if="item.type === 'Trade'" />
        <span>{{ item.type }}</span>
      </div>
    </template>
    <template #[`item.value`]="{ item }">
      ₮{{ item.value }}
    </template>
    <template #[`item.percent`]="{ item }">
      {{ item.percent }}%
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
</template>

<script>
import WalletsIconSafe from "@/components/icon/wallets/WalletsIconSafe";
import WalletsIconTrade from "@/components/icon/wallets/WalletsIconTrade";
export default {
  components: {WalletsIconTrade, WalletsIconSafe},
  props: {
    dataTable: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      headers: [
        { text: '', value: 'type', cellClass: 'my-accounts-table__cell' },
        {
          text: '',
          value: 'value',
          cellClass: 'my-accounts-table__cell',
        },
        {
          text: '',
          value: 'percent',
          cellClass: 'my-accounts-table__cell',
        },
        {
          text: '',
          value: 'actions',
          cellClass: 'my-accounts-table__cell',
        },
      ],
      actions: ['Deposit', 'Withdraw', 'Transfer'],
    }
  },

}
</script>


<style lang="scss">
.my-accounts-table {

  &__cell {
    font-size: 16px !important;
    line-height: 58px;
    color: #2F385E;


    &:first-child {
      padding-left: 0 !important;
    }

    &:last-child {
      padding-right: 0 !important;
    }
  }

  .my-accounts-table__type {
    display: flex;
    align-items: center;

    svg {
      margin: auto 12px auto 0;
    }
  }
}


</style>
