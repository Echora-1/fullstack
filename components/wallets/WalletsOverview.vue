<template>
  <div class="wallets-overview">
    <div class="wallets-overview__item">
      <current-balance :content="balance" />
      <div class="wallets-overview__btns">
        <common-button class="wallets-overview__btn">
          Deposit
        </common-button>
        <common-button class="wallets-overview__btn" secondary>
          Withdraw
        </common-button>
        <common-button class="wallets-overview__btn" secondary>
          Transfer
        </common-button>
        <common-button class="wallets-overview__btn" secondary>
          Transactions
        </common-button>
      </div>
    </div>
    <div class="wallets-overview__item">
      <h2 class="wallets-overview__item-title">My accounts</h2>
      <my-accounts-table :data-table="myAccountsData" />
    </div>
    <div class="wallets-overview__item">
      <div class="wallets-overview__item-header">
        <h2 class="wallets-overview__item-title">Recent Transactions</h2>
        <span>View All</span>
      </div>
      <recent-transactions-table class="wallets-overview__recent-transactions" :data-table="recentTransactionsData" />
      <p class="wallets-overview__item-link">Deposit hasn’t arrived?</p>
    </div>
  </div>
</template>
<script>
import CurrentBalance from "@/components/common/CurrentBalance";
import CommonButton from "@/components/common/CommonButton";
import MyAccountsTable from "@/components/wallets/MyAccountsTable";
import RecentTransactionsTable from "@/components/wallets/RecentTransactionsTable";
export default {
  components: {RecentTransactionsTable, MyAccountsTable, CommonButton, CurrentBalance},
  data() {
    return {
      balance: {
        title: 'Est. total value',
        cryptoCurrency: '0.21674639 BTC',
        currency: '$6,392.56',
      },
      myAccountsData: [
        {
          type: 'Safe',
          value: '3,000.00',
          percent: '46.16',
          actions: {menu: false}
        },
        {
          type: 'Trade',
          value: '3,392.56',
          percent: '53.84',
          actions: {menu: false}
        }
      ],
      recentTransactionsData: [
        {
          type: {value: 'deposit', date: 1662991670000},
          value: {value: '1000 USDT', status: 'completed'},
        },
        {
          type: {value: 'deposit', date: 1662808068000},
          value: {value: '200 USDT', status: 'completed'},
        },
        {
          type: {value: 'withdraw', date: 1662991670000},
          value: {value: '1500 USDT', status: 'completed'},
        },
        {
          type: {value: 'withdraw', date: 1662808068000},
          value: {value: '1000 USDT', status: 'cancelled'},
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.wallets-overview {
  &__item {
    padding: 25px 40px;
    border: 1px solid rgba(47, 56, 94, 0.1);
    border-radius: 6px;
    max-width: 782px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    span {
      font-size: 14px;
      line-height: 28px;
      text-align: right;
      color: #0066FF;
    }

    .wallets-overview__item-title {
      margin-bottom: 0;
    }
  }

  &__item-title {
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #2F385E;
    margin-bottom: 30px;
  }

  &__recent-transactions {
    margin-bottom: 20px;
  }

  &__item-link {
    font-size: 16px;
    color: #2F385E99;
    position: relative;
    padding-right: 12px;
    width: fit-content;

    &::before {
      content: "";
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 5px;
      height: 8px;
      background-image: url("../../assets/images/link-arrow.svg");
      background-position: center;
      background-repeat: no-repeat;
    }
  }


  &__btns {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  &__btn {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
}
</style>
