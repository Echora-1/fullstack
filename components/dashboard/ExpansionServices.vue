<template>
  <v-expansion-panels v-model="panel" multiple flat class="rounded-10px" >
    <v-expansion-panel class="rounded-10px"
    >
      <v-expansion-panel-header>
        <h2 class="title">More Services</h2>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-list>
          <v-list-item class="services-item">
            <v-list-item-content>
              <v-list-item-title class="d-flex align-center services-title">
                <icon-referral class="mr-3 services-icon" /> Referral
              </v-list-item-title>
              <v-list-item-subtitle class="caption pl-8 services-subtitle">
                Earn Up to 20% commission
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="services-item">
            <v-list-item-content>
              <v-list-item-title class="d-flex align-center services-title">
                <icon-orders class="mr-3 services-icon" /> Open Orders
              </v-list-item-title>
              <v-list-item-subtitle class="caption pl-8 services-subtitle">
                View all spot orders
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="services-item">
            <v-list-item-content>
              <v-list-item-title class="d-flex align-center services-title">
                <icon-transfer class="mr-3 services-icon" /> Transfer
              </v-list-item-title>
              <v-list-item-subtitle class="caption pl-8 services-subtitle">
                Transfer coins or tokens between TBCC.com account
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import IconReferral from "@/components/icon/nav/IconReferral";
import IconOrders from "@/components/icon/nav/IconOrders";
import IconTransfer from "@/components/icon/services/IconTransfer";
export default {
  components: {IconTransfer, IconOrders, IconReferral},
  data() {
    return {
      panel: [0]
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

.services-item {
  padding-left: 0;
}

.services-title {
  font-size: 18px;
  line-height: 28px;
  color: #2F385E;
}

.services-subtitle {
  font-size: 16px !important;
  color: rgba(47, 56, 94, 0.6) !important;
  white-space: normal;
}

.services-icon {
  color: #0066FF;
}

</style>
