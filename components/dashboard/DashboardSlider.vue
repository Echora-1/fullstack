<template>
<div class="dashboard-slider">
  <v-carousel
    cycle
    height="auto"
    hide-delimiters
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(_, i) in 5"
      :key="i"
    >
      <div class="dashboard-slider__item">
        <img src="../../assets/images/dashboard-slide.png" width="300" height="280" alt="slide"  class="dashboard-slider__img" />
      </div>
    </v-carousel-item>
  </v-carousel>
</div>
</template>

<style lang="scss" scoped>
.dashboard-slider {
  width: 100%;
  position: relative;

  &__item {
    margin-right: 5px;
    width: calc(100% - 5px);
    max-height: 240px;
    border-radius: 10px;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
