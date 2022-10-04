<template>
  <div class="orders">
    <v-tabs
      v-model="tab"
      background-color="transparent"
      active-class="orders__tab--active"
      class="orders__tabs"
    >
      <v-tabs-slider class="orders__tab-slider"></v-tabs-slider>
      <v-tab
        v-for="item in items"
        :key="item"
        class="orders__tab"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item
        class="orders__tab-item"
      >
        <open-orders />
      </v-tab-item>
      <v-tab-item
        class="orders__tab-item"
      >

      </v-tab-item>
      <v-tab-item
        class="orders__tab-item"
      >

      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import OpenOrders from "@/components/orders/OpenOrders";
export default {
  components: {OpenOrders},
  layout: 'dashboard',
  middleware: ['auth'],
  data() {
    return {
      tab: 0,
      items: [
        'Open orders', 'Order history', 'Trade history'
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.orders {
  background: #FFFFFF;
  border-radius: 10px;

  &__tabs {
    overflow: hidden;
    padding-top: 10px;
  }

  &__tab {
    font-weight: 500;
    font-size: 16px;
    color: #161C2F99;
    text-transform: unset;
    padding: 10px 25px;
    min-width: auto;
    letter-spacing: -0.4px;

    &--active {
      color: #161C2F;
      border-color: #FFFFFF;
      background: #FFFFFF;
    }
  }

  &__tab-slider {
    background: #0066FF;
    border-radius: 8px;
    height: 4px;
    bottom: 2px;
  }

  &__tab-item {
    display: flex;
    flex-direction: column;
    padding: 24px 40px 25px;
    min-height: 677px;
  }
}

.orders::v-deep {
  .v-slide-group__content {
    padding: 0 40px;
  }
}
</style>
