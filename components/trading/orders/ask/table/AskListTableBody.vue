<template>
  <tbody v-if="ordersData" class="ask-list-table-body">
    <tr
      v-for="(item, itemIndex) in ordersData"
      class="ask-list-table-body__row"
      :class="{
        'orders-active-row': isAboveThanHoverElement(itemIndex, 'ask'),
      }"
      @mouseover="selectItemHover(item)"
      @mouseout="clearSelectedRowIndex"
      :key="itemIndex"
    >
      <td>
        <p class="ask-list-table-body__price">
          {{ formatPrice(item.price, getPriceScale) }}
        </p>
      </td>
      <td>
        <p class="ask-list-table-body__text" style="text-align: end">
          {{ formatSize(item.actualSize, getAmountScale) }}
        </p>
      </td>
      <td>
        <div class="ask-list-table-body__tooltip-volume-wrapper">
          <OrdersWall
            :item-index="itemIndex"
            :volume="calculateVolume(item.price, item.actualSize)"
            type="ask"
          />
          <div>
            <p class="ask-list-table-body__text" style="text-align: end">
              {{ calculateVolume(item.price, item.actualSize) }}
            </p>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BigNumber from 'bignumber.js'

import OrdersWall from '@/components/trading/common/OrdersWall.vue'
import formatPrice from '@/mixins/trading/formatPrice'
import formatSize from '@/mixins/trading/formatSize'
import getPriceScale from '@/mixins/trading/getPriceScale'
import getAmountScale from '@/mixins/trading/getAmountScale'
import calculateVolume from '@/mixins/trading/calculateVolume'
BigNumber.config({ EXPONENTIAL_AT: [-15, 20] })

export default {
  name: 'AskListTableBody',

  mixins: [
    formatPrice,
    formatSize,
    getPriceScale,
    getAmountScale,
    calculateVolume,
  ],

  components: { OrdersWall },

  props: {
    ordersData: {
      type: Array,
      required: true,
    },
    amountDepth: {
      type: Number,
      default: 921.8,
    },
    volumeDepth: {
      type: Number,
      default: 58.1281,
    },
    best: {
      type: Number,
      default: 2,
    },
    currency: {
      type: String,
      default: 'TBCC',
    },
    market: {
      type: String,
      default: 'USDT',
    },
  },

  watch: {
    ordersData() {
      if (this.$store.state.tooltip.activeTooltipType === 'ask')
        this.updateTooltipData()
    },
  },

  computed: {
    ...mapGetters({
      isAboveThanHoverElement: 'tooltip/isAboveThanHoverElement',
    }),
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    },
    isDesktop() {
      return !this.isMobile
    },
  },

  methods: {
    ...mapActions({
      selectedItemHoverHandler: 'tooltip/selectedItemHoverHandler',
      clearSelectedRowIndex: 'tooltip/clearSelectedRowIndex',
      updateData: 'tooltip/updateData',
    }),

    emitPrice(itemPrice) {
      this.$eventHub.$emit('set-buy-price', { price: itemPrice })
    },

    calculatePercent(actualSize) {
      return BigNumber(actualSize)
        .times(100)
        .div(BigNumber(this.volumeDepth))
        .dp(2)
        .toString()
    },

    selectItemHover(item) {
      const payload = {
        item,
        type: 'ask',
        ordersData: this.ordersData,
        priceScale: this.getPriceScale,
        amountScale: this.getAmountScale,
      }
      this.selectedItemHoverHandler(payload)
    },

    updateTooltipData() {
      const payload = {
        ordersData: this.ordersData,
        priceScale: this.getPriceScale,
        amountScale: this.getAmountScale,
      }
      this.updateData(payload)
    },
  },
}
</script>

<style scoped lang="scss">
.ask-list-table-body {
  position: relative;
  td {
    height: 20px !important;
    border-bottom: none !important;

    &:not(:first-child) {
      padding-right: 0;
    }

    &:first-child {
      padding-left: 0;
    }
  }

  &__text,
  &__price {
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    color: #161c2f;
    letter-spacing: -0.41px;
    margin: 0;
  }

  &__price {
    color: #ff6b6b;
  }
}
</style>
