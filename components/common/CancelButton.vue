<template>
  <button class="cancel-button" @click="emmitClick">
    <icon-cancel />
  </button>
</template>
<script>
import IconCancel from "@/components/icon/IconCancel";
export default {
  components: {IconCancel},

  props: {
    cancelId: {
      type: String,
      required: true
    }
  },

  methods: {
    emmitClick() {
      this.$emit('click', this.cancelId)
    }
  }
}
</script>

<style lang="scss" scoped>
.cancel-button {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #161C2F;

  &:hover {
    color: #FF6B6B;
  }
}
</style>
