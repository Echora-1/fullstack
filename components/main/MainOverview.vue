<template>
  <base-tabs class="main-overview e-container" :title="'Overview'">
    <base-tab :title="'Top Gainers'">
      <top-gainers />
    </base-tab>
    <base-tab :title="'New Listings'">

    </base-tab>
    <base-tab :title="'Hot Spot'">

    </base-tab>
    <base-tab :title="'Hot Derivatives'">

    </base-tab>
  </base-tabs>
</template>
<script>
import BaseTabs from "@/components/base/BaseTabs";
import BaseTab from "@/components/base/BaseTab";
import TopGainers from "@/components/main/TopGainers";
export default {
  components: {TopGainers, BaseTab, BaseTabs}

}
</script>

<style lang="scss" scoped>
.main-overview {
  min-height: 422px;

  @media(max-width: 1023px) {
    min-height: 477px;
  }

  @media(max-width: 767px) {
    max-width: 425px;
  }
}
</style>
