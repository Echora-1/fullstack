<template>
	<span>
		<span
      v-if="type === 'bid' || type === 'ask' "
      :class="[{'orders-wall--bid': type === 'bid', 'orders-wall--ask': type === 'ask'}]"
      :style="{ transform: calculateMargin, left: calculateLength }"
    />
	</span>
</template>

<script>
export default {
  name: 'OrdersWall',

  props: {
    itemIndex: {
      type: Number,
      required: true,
    },
    volume: {
      type: [Number, String],
      required: true,
    },
    type: {
      validator(value) {
        return ['ask', 'bid'].includes(value);
      },
    },
  },

  computed: {
    calculateMargin() {
      const rowHeight = 20;
      const rowIndex = this.itemIndex;
      const calculatedMargin = rowIndex * rowHeight + 'px';

      return `translateY(${calculatedMargin})`;
    },
    calculateLength() {
      let volumeDepth = 0;
      volumeDepth = this.bidVolumeDepth;

      const percent = (this.volume / volumeDepth) * 100 + '%';
      const tablePadding = '4px';
      return `calc(100% - ${percent} - ${tablePadding})`;
    },

    bidVolumeDepth() {
      return 21.4551;
    },
    askVolumeDepth() {
      return 58.1281;
    },

    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>

<style scoped lang="sass">
.orders-wall-main
  position: absolute
  top: 0
  bottom: 0
  right: 0
  left: 0
  height: 20px

.orders-wall--bid
  @extend .orders-wall-main
  background: rgba(32, 201, 151, 0.2)

.orders-wall--ask
  @extend .orders-wall-main
  background: rgba(245, 146, 146, 0.2)
</style>
