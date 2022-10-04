<template>
  <div class="order-book-list">
    <v-tabs
      v-model="tab"
      background-color="transparent"
      grow
      active-class="order-book-list__tab--active"
      class="order-book-list__tabs"
      :mobile-breakpoint="0"
    >
      <v-tabs-slider class="order-book-list__tab-slider"></v-tabs-slider>
      <v-tab
        class="order-book-list__tab"
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
    <bid-table-actions />
    <v-tabs-items v-model="tab">
      <v-tab-item
        class="order-book-list__tab-item"
      >
        <order-book-table />
      </v-tab-item>
      <v-tab-item
        class="order-book-list__tab-item"
      >
      </v-tab-item>
      <v-tab-item
        class="order-book-list__tab-item"
      >
      </v-tab-item>
      <v-tab-item
        class="order-book-list__tab-item"
      >
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import OrderBookTable from "@/components/trading/tickers/OrderBookTable";
import BidTableActions from "@/components/trading/orders/bid/table/BidTableActions";
export default {
  components: {BidTableActions, OrderBookTable},
  data() {
    return {
      search: "",
      tab: 0,
      items: [
        'Order book', 'History', 'My trades',
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.order-book-list {
  background: #FFFFFF;

  &__header {
    padding: 11px 20px 12px;
    border-bottom: 1px solid #161C2F1A;
  }

  &__header-title {
    font-weight: 500;
    font-size: 16px;
    color: #161C2F;
  }

  &__search {
    margin: 18px 20px 10px;
  }

  &__tabs {
    overflow: hidden;
  }

  &__tab {
    font-weight: 500;
    font-size: 16px;
    color: #161C2F99;
    text-transform: unset;
    padding:0;
    min-width: auto;
    letter-spacing: -0.4px;

    &--active {
      color: #161C2F;
      border-color: #FFFFFF;
      background: #FFFFFF;
    }
  }

  &__tab-slider {
    background: linear-gradient(77.9deg, #0066FF -3.83%, #2CE0C5 110.36%);
  }

  &__tab-item {
    display: flex;
    flex-direction: column;
    padding: 0 16px 25px;
    min-height: 677px;
  }
}
</style>
