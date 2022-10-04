<template>
  <div class="trading">
    <trading-header class="trading__header" />
    <trading-tickers-list class="trading__tickers-list" />
    <charts-wrap class="trading__tickers-chart" />
    <order-book-list class="trading__order-book-list" />
    <trading-forms-wrapper class="trading__forms" />
    <open-orders-wrapper class="trading__open-orders" />
  </div>
</template>
<script>
import TradingTickersList from '@/components/trading/tickers/TradingTickersList'
import ChartsWrap from "@/components/trading/chart/ChartsWrap";
import OrderBookList from "@/components/trading/tickers/OrderBookList";
import TradingFormsWrapper from "@/components/trading/forms/TradingFormsWrapper";
import OpenOrdersWrapper from "@/components/trading/orders/OpenOrdersWrapper";
import TradingHeader from "@/components/trading/TradingHeader";
export default {
  components: {TradingHeader, OpenOrdersWrapper, TradingFormsWrapper, OrderBookList, ChartsWrap, TradingTickersList },
  layout: 'trading',
  middleware: ['auth'],
}
</script>

<style lang="scss">
.trading {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(15, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;

  &__header {
    grid-area: 1 / 1 / 2 / 13;
    max-height: 73px;
  }

  &__tickers-list {
    grid-area: 2 / 1 / 12 / 3;
    min-width: 300px;

/*    @media(min-width: 1441px) {
      grid-area: 1 / 1 / 9 / 4;
    }*/
  }

  &__tickers-chart {
    grid-area:  2 / 3 / 7 / 11;

/*    @media(min-width: 1441px) {
      grid-area: 1 / 4 / 5 / 10;
    }*/
  }

  &__order-book-list {
    grid-area:  2 / 11 / 12 / 13;
    min-width: 300px;

/*    @media(min-width: 1441px) {
      grid-area: 1 / 10 / 9 / 13;
    }*/
  }

  &__forms {
    grid-area:7 / 3 / 12 / 11;

/*    @media(min-width: 1441px) {
      grid-area: 5 / 4 / 9 / 10;
    }*/
  }

  &__open-orders {
    grid-area: 12 / 1 / 16 / 13;
  }
}
</style>
