<template>
  <div class="open-orders-wrapper">
    <v-tabs
      v-model="tab"
      background-color="transparent"
      active-class="open-orders-wrapper__tab--active"
      class="open-orders-wrapper__tabs"
    >
      <v-tabs-slider class="open-orders-wrapper__tab-slider"></v-tabs-slider>
      <v-tab
        class="open-orders-wrapper__tab"
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item

        class="open-orders-wrapper__tab-item"
      >
        <open-orders-table />
      </v-tab-item>
      <v-tab-item
        class="open-orders-wrapper__tab-item"
      >
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import OpenOrdersTable from "@/components/trading/orders/OpenOrdersTable";
export default {
  components: {OpenOrdersTable},
  data() {
    return {
      tab: 0,
      items: [
        'Open Orders', 'Order History', 'Trade History', 'Funds'
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.open-orders-wrapper {
  background: #FFFFFF;
  position: relative;

  &__header {
    font-weight: 500;
    font-size: 16px;
    color: #161C2F;
    letter-spacing: -0.4px;
    padding: 20px 20px 12px;
  }


  &__tabs {
    overflow: hidden;
  }

  &__forms {
    display: flex;
    gap: 20px;
  }

  &__form {
    width: 100%;
    max-width: calc((100% - 20px) /2);
  }

  &__tab {
    font-weight: 500;
    font-size: 16px;
    color: #161C2F99;
    letter-spacing: -0.4px;
    text-transform: unset;
    min-width: auto;

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
    padding: 0 0 16px;
  }
}
</style>
