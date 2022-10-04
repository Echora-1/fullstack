<template>
  <button class="favorites-btn" @click="toggleFavorite">
    <icon-is-favorites v-if="isFavorite"/>
    <icon-favorites v-else />
  </button>
</template>

<script>
import IconFavorites from "@/components/icon/IconFavorites";
import IconIsFavorites from "@/components/icon/IconIsFavorites";
export default {
  components: {IconIsFavorites, IconFavorites},

  data() {
    return {
      isFavorite: false
    }
  },

  methods: {
    toggleFavorite() {
      this.isFavorite = !this.isFavorite
      this.$emit('toggle-favorite', this.isFavorite)
    }
  }
}
</script>

<style lang="scss" scoped>
.favorites-btn {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: red;
  }
}
</style>
