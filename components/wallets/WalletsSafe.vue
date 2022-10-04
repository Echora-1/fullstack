<template>
  <div class="wallets-safe">
    <div class="wallets-safe__item">
      <current-balance :content="balance" />
      <div class="wallets-safe__btns">
        <common-button class="wallets-safe__btn">
          Withdraw
        </common-button>
        <common-button class="wallets-safe__btn" secondary>
          Transfer
        </common-button>
        <common-button class="wallets-safe__btn" secondary>
          Transactions
        </common-button>
      </div>
      <assets-tablet hidden-title :table-data="assetsData"/>
    </div>
    <div class="wallets-safe__item">
      <div class="wallets-safe__item-header">
        <h2 class="wallets-safe__item-title">Recent Transactions</h2>
        <span>View All</span>
      </div>
      <recent-transactions-table class="wallets-safe__recent-transactions" :data-table="recentTransactionsData" />
      <p class="wallets-safe__item-link">Deposit hasn’t arrived?</p>
    </div>
  </div>
</template>

<script>
import CurrentBalance from "@/components/common/CurrentBalance";
import CommonButton from "@/components/common/CommonButton";
import RecentTransactionsTable from "@/components/wallets/RecentTransactionsTable";
import AssetsTablet from "@/components/dashboard/AssetsTablet";
export default {
  components: {AssetsTablet, RecentTransactionsTable, CommonButton, CurrentBalance},
  data() {
    return {
      balance: {
        title: 'Est. total value',
        cryptoCurrency: '0.21674639 BTC',
        currency: '$6,392.56',
      },
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
      ],
      assetsData: [
        {
          asset: { name: 'ustd', fullName: 'Tether' },
          balance: { coins: '4,320.00', usd: '4325.25' },
          percent: '60.16',
          actions: {menu: false},
        },
        {
          asset: { name: 'btc', fullName: 'Bitcoin' },
          balance: { coins: '0.09', usd: '1294.94' },
          percent: '20.28',
          actions: {menu: false},
        },
        {
          asset: { name: 'eth', fullName: 'Ethereum' },
          balance: { coins: '0.21000458', usd: '387.94' },
          percent: '7.65',
          actions: {menu: false},
        },
        {
          asset: { name: 'ltc', fullName: 'Litecoin' },
          balance: { coins: '1.09', usd: '118.54' },
          percent: '4.09',
          actions: {menu: false},
        },
        {
          asset: { name: 'tbcc', fullName: 'TBCC' },
          balance: { coins: '200.09', usd: '28.94' },
          percent: '2.98',
          actions: {menu: false},
        },
        {
          asset: { name: 'bch', fullName: 'Bitcoin Cash' },
          balance: { coins: '0.00', usd: '0.00' },
          percent: '0.0',
          actions: {menu: false},
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.wallets-safe {
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

    .wallets-safe__item-title {
      margin-bottom: 0;
    }
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
    margin-bottom: 30px;
  }

  &__btn {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
}
</style>
