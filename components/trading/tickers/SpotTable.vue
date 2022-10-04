<template>
  <v-data-table
    :headers="headers"
    :items="coins"
    item-key="name"
    :mobile-breakpoint="0"
    hide-default-footer
    dense
  >
    <template #[`item.pair`]="{ item }">
      <div class="spot-pair-slot">
        <favorites-btn class="spot-pair-slot__btn" />
        <div>
          <span class="spot-pair-slot__coin">{{ item.pair.coin }}</span>
          <span class="spot-pair-slot__value">{{ item.pair.value }}</span>
        </div>
      </div>
    </template>
    <template #[`item.price`]="{ item }">
      <div class="spot-price-slot">
          <span class="spot-price-slot__value">{{ item.price.value }}</span>
          <span :class="['spot-price-slot__percent-change', {'spot-price-slot__percent-change--lose': Math.floor(item.price.percentChange * 100) < 0 }]">{{ item.price.percentChange }}%</span>
      </div>
    </template>
  </v-data-table>
</template>
<script>
import FavoritesBtn from "@/components/common/FavoritesBtn";
export default {
  components: {FavoritesBtn},
  props: {
    coins: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      headers: [
        {
          text: 'Pair / 24h volume',
          align: 'start',
          value: 'pair',
          class: 'spot-table__header',
          sortable: false,
          cellClass: 'spot-table__cell-left',
        },
        {
          text: 'Last Price/Change',
          align: 'start',
          value: 'price',
          class: 'spot-table__header',
          sort: this.sortPercentChange,
          cellClass: 'spot-table__cell-right',
        },
      ],
    }
  },

  methods: {
    sortPercentChange(item1, item2) {
      const normalizePercent1 = Math.floor(item1.percentChange * 100)
      const normalizePercent2 = Math.floor(item2.percentChange * 100)
      function sort(a, b) {
        if (a === b) {
          return 0
        }
        return a > b ? 1 : -1
      }


      return sort(normalizePercent1, normalizePercent2)
    }
  }
}
</script>

<style lang="scss" scoped>
.spot-table {
}
</style>

<style lang="scss">
.spot-table__header {
  letter-spacing: -0.4px;
  width: 50%;
  border-bottom: none !important;
  font-weight: 500;
  font-size: 13px !important;
}

.spot-table__cell-left {
  border: none !important;
}

.spot-table__cell-right {
  border: none !important;
}
</style>
