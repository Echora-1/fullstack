<template>
  <v-expansion-panels v-model="panel" flat class="rounded-10px" multiple>
    <v-expansion-panel class="rounded-10px"
    >
      <v-expansion-panel-header>
        <h2 class="title">Account</h2>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <div class="account-item" v-for="(item, index) in accountItems" :key="index">
          <div>
            <p class="account-item__name">{{item.name}}<icon-arrow-account/></p>
            <p  class="account-item__value">{{item.value}}</p>
          </div>
          <div v-if="item.status" class="account-item__status base-badge">
            <icon-status/>
            <span>Verified</span>
          </div>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import {mapGetters} from "vuex";
import IconArrowAccount from "@/components/icon/IconArrowAccount";
import IconStatus from "@/components/icon/IconStatus";
export default {
  components: {IconStatus, IconArrowAccount},
  data() {
    return {
      panel: [0],
    }
  },

  computed: {
    ...mapGetters({getUserId: 'user/getUserId', getLastLogin: 'user/getLastLogin'}),

    accountItems() {
      const items = []
      if(this.getUserId) {
        items.push({
          name: 'User ID',
          value: this.getUserId,
          status: true,
        })
      }
      if(this.getLastLogin) {
        items.push({
          name: 'Last login time',
          value: this.getLastLogin,
        })
      }
      return items
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

.account-item {
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    padding-bottom: 15px;
    border-bottom: 1px solid #2F385E14;
    margin-bottom: 15px;
  }

  &__name {
    font-size: 16px;
    color: #2F385E;
    opacity: 0.6;
    margin: 0;
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

  &__status {
    margin-top: auto;

    svg {
      margin-right: 6px;
      width: 16px;
      height: 16px;
    }
  }
}
</style>
