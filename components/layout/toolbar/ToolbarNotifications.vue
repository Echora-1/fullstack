<template>
  <div class="toolbar-notifications">
    <v-menu
      transition="slide-y-transition"
      :close-on-content-click="false"
      min-width="400"
      offset-y
      left
    >
      <template #activator="{ on }">
        <v-badge
          :value="2"
          offset-x="22"
          offset-y="22"
          dot
          bordered
        >
          <v-btn icon color="#2F385E" v-on="on">
            <icon-bell />
          </v-btn>
        </v-badge>
      </template>

      <v-card class="toolbar-notifications__card">
        <div v-if="2 > 0">
          <v-list three-line dense max-width="400">
            <v-subheader class="pa-4 font-weight-bold">
              {{ 'Notifications' }}
            </v-subheader>
            <div v-for="(item, index) in 2" :key="item.id">
              <v-divider v-if="index > 0 && index < 3" inset />

              <v-list-item>
                <v-list-item-avatar size="32" :color="'black'">
                  <v-icon dark small>
                    {{ 'mdi-email-outline' }}
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>
                    {{ 'title' }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="caption">
                    {{ 'text' }}
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action class="align-self-center">
                  <v-list-item-action-text>
                    {{ 'time' }}
                  </v-list-item-action-text>
                </v-list-item-action>
              </v-list-item>
            </div>
          </v-list>
        </div>

        <div v-else class="text-center overline pa-2 pb-0">
          {{ 'test' }}
        </div>

        <div class="text-center mx-1 mx-sm-0 py-4">
          <v-btn :block="false" small>
            {{ 'See all' }}
          </v-btn>
        </div>
      </v-card>
    </v-menu>

    <notifications-detail
      v-if="showDetails"
      :dialog-prop="showDetails"
      :subject="'test'"
      :text="'test'"
      @close="showDetails = false"
    />
  </div>
</template>

<script>
import NotificationsDetail from '../../notifications/NotificationsDetail'
import IconBell from '@/components/icon/IconBell'

export default {
  name: 'ToolbarNotifications',

  components: { IconBell, NotificationsDetail },

  data() {
    return {
      showDetails: false,
      selectedNotificationDetails: null,
    }
  },
}
</script>

<style lang="sass" scoped>
.theme--dark .toolbar-notifications__card
  background-color: var(--dark-popups-background-color) !important
</style>
