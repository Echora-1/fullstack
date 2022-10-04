<template>
  <div class="bid-table-actions">
    <icon-actions1 />
    <icon-actions2 />
    <icon-actions3 />
  </div>
</template>
<script>
import IconActions1 from "@/components/icon/table-actions/IconActions1";
import IconActions2 from "@/components/icon/table-actions/IconActions2";
import IconActions3 from "@/components/icon/table-actions/IconActions3";
export default {
  components: {IconActions3, IconActions2, IconActions1}
}
</script>


<style lang="scss" scoped>
.bid-table-actions {
  display: flex;
  padding: 20px 16px 15px;
  gap: 15px;

  svg {
    cursor: pointer;
  }
}
</style>
