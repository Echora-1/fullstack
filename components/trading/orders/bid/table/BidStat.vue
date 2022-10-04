<template>
  <div class="bid-stat">
    <span class="bid-stat__value">43,801.2<icon-arrow-table /></span>
    <span class="bid-stat__sub-value">43,801.2</span>
  </div>
</template>

<script>
import IconArrowTable from "@/components/icon/IconArrowTable";
export default {
  components: {IconArrowTable}
}
</script>

<style lang="scss" scoped>
.bid-stat {
  padding: 16px 0;
  display: flex;
  align-items: center;

  &__value {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #20C997;
    display: inline-flex;
    align-items: center;
    margin-right: 12px;

    svg {
      margin-left: 8px;
    }
  }

  &__sub-value {
    font-size: 14px;
    color: #161C2F;
    opacity: 0.6;
  }
}
</style>
