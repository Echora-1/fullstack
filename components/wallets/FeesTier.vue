<template>
  <div class="fees-tier">
    <p class="fees-tier__title">My fee tier</p>
    <div class="fees-tier__main">
      <div class="fees-tier__lvl">
        <img src="../../assets/images/fees-lvl.svg" width="56" height="56" alt="lvl">
        <div>
          <p class="fees-tier__lvl-value">Lv 1</p>
          <p class="fees-tier__email">gro***@gmail.com</p>
        </div>
      </div>
      <div class="fees-tier__stat">
        <div class="fees-tier__stat-content">
          <div>
            <p class="fees-tier__stat-name">Maker / Taker fee</p>
            <p class="fees-tier__stat-value">0.075% / 0.075%</p>
          </div>
          <div>
            <p class="fees-tier__stat-name">30-day trading volume (USD)</p>
            <p class="fees-tier__stat-value">$5,574.85</p>
          </div>
        </div>
        <v-progress-linear
          rounded
          background-color="#EDEFF6"
          color="#0066FF"
          class="fees-tier__limits-bar"
          v-model="progressBar"
          :buffer-value="maxProgressBar"
        ></v-progress-linear>
        <p class="fees-tier__bar-text">$5,574.85 / $25,000.00 to level 2</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progressBar: 30,
      maxProgressBar: 100
    }
  }
}
</script>

<style lang="scss" scoped>
.fees-tier {
  color: #2F385E;

  &__title {
    font-size: 24px;
    line-height: 28px;
    margin: 0 0 24px;
  }

  &__main {
    display: flex;
    align-items: center;
    gap: 34px;
  }

  &__lvl {
    display: flex;
    align-items: center;
    gap: 17px;
  }

  &__lvl-value {
    font-weight: 600;
    font-size: 30px;
    line-height: 30px;
    color: #0066FF;
    margin: 0;
  }

  &__email {
    opacity: 0.6;
    font-size: 14px;
    line-height: 28px;
    margin: 0;
  }

  &__stat-content {
    display: flex;
    gap: 40px;
  }

  &__stat-name {
    opacity: 0.6;
    font-size: 14px;
    line-height: 28px;
    margin: 0;
  }

  &__stat-value {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    margin: 0;
  }

  &__limits-bar {
    margin: 15px 0 10px;
  }
}
</style>
