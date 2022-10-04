<template>
  <v-menu offset-y left transition="slide-y-transition">
    <template #activator="{ on }">
      <v-btn icon class="elevation-0" v-on="on">
        <v-avatar  size="40">
          <icon-avatar />
        </v-avatar>
      </v-btn>
    </template>

    <v-list dense nav>
      <v-list-item-group>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          :disabled="item.disabled"
        >
          <v-list-item-icon class="icon-item d-flex justify-center align-center">
            <v-icon small :class="{ 'grey--text': item.disabled }">
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>

      <v-divider class="my-1" />

      <v-list-item link>
        <v-list-item-icon class="icon-item d-flex justify-center align-center">
          <v-icon small>mdi-logout-variant</v-icon>
        </v-list-item-icon>
        <v-list-item-content @click="logOut">
          <v-list-item-title>{{ 'Logout' }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import {mapActions} from "vuex";
import IconAvatar from "@/components/icon/IconAvatar";
export default {
  name: 'ToolbarUser',
  components: {IconAvatar},
  data() {
    return {
      items: [
        {
          icon: 'mdi-account-box-outline',
          text: 'Profile',
          link: '/profile',
          tabIndex: 0,
        },
        {
          icon: 'mdi-email-outline',
          text: 'Verification',
          link: '/profile#verification',
          tabIndex: 1,
        },
        {
          icon: 'mdi-format-list-checkbox',
          text: 'API',
          link: '/profile#api',
          tabIndex: 2,
        },
        {
          icon: 'mdi-shield-key-outline',
          text: 'Security',
          link: '/profile#security',
          tabIndex: 3,
        },
        {
          icon: 'mdi-cog-outline',
          text: 'Settings',
          link: '/profile#settings',
          tabIndex: 4,
        },
      ],
    }
  },

  methods: {
    ...mapActions({setAuthenticated: 'setAuthenticated'}),

    logOut() {
      this.$cookies.remove('token')
      this.setAuthenticated(false)
      this.$router.push(this.localePath('/log-in'))
    },
  }
}

</script>

<style lang="scss" scoped>
.icon-item {
  &:first-child {
    margin-right: 14px;
  }
}
</style>
