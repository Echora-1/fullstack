<template>
  <div class="trading-header">
    <p class="trading-header__title">BTC/USDT</p>
    <div class="trading-header__title-stat">
      <p>43,801.2</p>
      <span>+0.53%</span>
    </div>
    <div class="trading-header__stat">
      <div class="trading-header__stat-item" v-for="(item, index) in stat" :key="index">
        <span>{{item.title}}</span>
        <p>{{item.value}}</p>
      </div>
    </div>
    <div class="trading-header__actions">
      <p><icon-trading /> Trading Data</p>
      <p><icon-information /> Information</p>
    </div>

  </div>
</template>

<script>
import IconTrading from "@/components/icon/IconTrading";
import IconInformation from "@/components/icon/IconInformation";
export default {
  components: {IconInformation, IconTrading},
  data() {
    return {
      stat: [
        {
          title: 'USD',
          value: '$43,798.50'
        },
        {
          title: '24h Low',
          value: '$41,541.89'
        },
        {
          title: '24h High',
          value: '$44,108.54'
        },
        {
          title: '24h Turnover(USDT)',
          value: '292.91M'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.trading-header {
  background: #ffffff;
  padding: 16px;
  display: flex;
  align-items: center;

  &__title {
    font-weight: 500;
    font-size: 24px;
    margin: 0 30px 0 0;
    color: #161c2f;
  }
  &__title-stat {
    margin-right: 30px;

    p,
    span {
      color: #20c997;
    }

    p {
      margin: 0;
      font-weight: 600;
      font-size: 18px;
    }

    span {
      font-size: 14px;
    }
  }

  &__stat {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  &__stat-item {
    span {
      font-size: 14px;
      letter-spacing: -0.41px;
      color: #161C2F;
      opacity: 0.6;
    }

    p {
      font-size: 14px;
      letter-spacing: -0.41px;
      font-weight: 500;
      color: #161C2F;
      margin: 0;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 45px;
    gap: 25px;

    svg {
      margin-right: 10px;
    }

    p {
      font-weight: 500;
      font-size: 16px;
      letter-spacing: -0.41px;
      color: #161C2F;
      margin: 0;
      display: inline-flex;
      align-items: center;
      cursor: pointer;
    }
  }
}
</style>
