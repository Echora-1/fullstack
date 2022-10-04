<template>
  <v-expansion-panels  v-model="panel" flat class="rounded-10px" multiple>
    <v-expansion-panel class="rounded-10px"
    >
      <v-expansion-panel-header>
        <h2 class="title">Limits & Fees</h2>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <div class="limits-content">
          <div>
            <p class="limits-content__name">Spot Trading Tier<icon-arrow-account /></p>
            <div class="base-badge"><span>Level 1</span></div>
          </div>
          <div>
            <p class="limits-content__name">Maker / Taker fee<icon-arrow-account /></p>
            <p class="limits-content__value">0.075% / 0.075%</p>
          </div>
        </div>
        <v-progress-linear
          rounded
          background-color="#EDEFF6"
          color="#0066FF"
          class="limits-bar"
          v-model="progressBar"
          :buffer-value="maxProgressBar"
        ></v-progress-linear>
        <p class="limits-content__name">$0,00 / $25,000.00 to level 2</p>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import IconArrowAccount from "@/components/icon/IconArrowAccount";
export default {
  components: {IconArrowAccount},
  data() {
    return {
      panel: [0],
      progressBar: 0,
      maxProgressBar: 100
    }
  }
}
</script>


<style lang="scss" scoped>
.title {
  font-weight: 500;
  font-size: 18px;
  color: #2F385E;
}

.base-badge {
  width: max-content;
  border-radius: 6px;
  padding: 2px 10px;
}

.limits-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 17px;

  &__name {
    font-size: 16px;
    color: #2F385E;
    opacity: 0.6;
    margin: 0 0 5px;
    display: inline-flex;
    align-items: center;

    svg {
      margin-left: 6px;
    }
  }

  &__value {
    font-weight: 500;
    font-size: 17px;
    color: #2F385E;
    margin: 0;
  }
}

.limits-bar {
  margin-bottom: 8px;
}
</style>
