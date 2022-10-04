<template>
  <div class="wallets">
    <v-tabs
      v-model="tab"
      background-color="transparent"
      active-class="wallets__tab--active"
      class="wallets__tabs"
    >
      <v-tabs-slider class="wallets__tab-slider"></v-tabs-slider>
      <v-tab
        class="wallets__tab"
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item
        class="wallets__tab-item"
      >
        <wallets-overview />
      </v-tab-item>
      <v-tab-item
        class="wallets__tab-item"
      >
        <wallets-safe />
      </v-tab-item>
      <v-tab-item
        class="wallets__tab-item"
      >
        <wallets-safe />
      </v-tab-item>
      <v-tab-item
        class="wallets__tab-item"
      >
        <wallets-analysis />
      </v-tab-item>
      <v-tab-item
        class="wallets__tab-item"
      >
        <wallets-fees />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import WalletsOverview from "@/components/wallets/WalletsOverview";
import WalletsSafe from "@/components/wallets/WalletsSafe";
import WalletsAnalysis from "@/components/wallets/WalletsAnalysis";
import WalletsFees from "@/components/wallets/WalletsFees";
export default {
  components: {WalletsFees, WalletsAnalysis, WalletsSafe, WalletsOverview},
  layout: 'dashboard',
  middleware: ['auth'],
  data() {
    return {
      tab: 0,
      items: [
        'Overview', 'Safe', 'Trade', 'Analysis', 'Fees'
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.wallets {
  background: #FFFFFF;
  border-radius: 10px;

  &__tabs {
    overflow: hidden;
    padding-top: 10px;
  }

  &__tab {
    font-weight: 500;
    font-size: 16px;
    color: #161C2F99;
    text-transform: unset;
    padding: 10px 25px;
    min-width: auto;
    letter-spacing: -0.4px;

    &--active {
      color: #161C2F;
      border-color: #FFFFFF;
      background: #FFFFFF;
    }
  }

  &__tab-slider {
    background: #0066FF;
    border-radius: 8px;
    height: 4px;
    bottom: 2px;
  }

  &__tab-item {
    display: flex;
    flex-direction: column;
    padding: 24px 40px 25px;
    min-height: 677px;
  }
}

.wallets::v-deep {
   .v-slide-group__content {
     padding: 0 40px;
   }
 }
</style>
