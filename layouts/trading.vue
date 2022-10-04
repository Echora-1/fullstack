<template>
  <v-app class="dashboard">
    <v-app-bar
      class="rounded-t-0"
      height="80"
      color="white"
      flat
      clipped-left
      app
    >
      <icon-logo class="dashboard__logo" @click.native="toMainPage" />
      <div class="dashboard__nav">
        <nuxt-link class="dashboard__nav-item" :to="localePath('/trading')">Trade</nuxt-link>
        <nuxt-link class="dashboard__nav-item" :to="localePath('/dashboard')">Markets</nuxt-link>
      </div>
      <v-spacer class="d-none d-lg-block" />
      <v-spacer class="d-block" />
      <toolbar-theme-changer />

      <div class="mr-2">
        <toolbar-notifications />
      </div>

      <div class="mr-1">
        <toolbar-language />
      </div>

      <div class="mr-2">
        <toolbar-currency />
      </div>

      <div>
        <toolbar-user />
      </div>
    </v-app-bar>

    <v-main class="dashboard__main">
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>
<script>
import IconLogo from '@/components/icon/IconLogo'
import ToolbarThemeChanger from '@/components/layout/toolbar/ToolbarThemeChanger'
import ToolbarNotifications from '@/components/layout/toolbar/ToolbarNotifications'
import ToolbarLanguage from '@/components/layout/toolbar/ToolbarLanguage'
import ToolbarCurrency from '@/components/layout/toolbar/ToolbarCurrency'
import ToolbarUser from '@/components/layout/toolbar/ToolbarUser'
export default {
  components: {
    ToolbarUser,
    ToolbarLanguage,
    ToolbarNotifications,
    IconLogo,
    ToolbarThemeChanger,
    ToolbarCurrency,
  },

  methods: {
    toMainPage() {
      this.$router.push(this.localePath('/'))
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &__app-bar {
    border-radius: 0 0 10px 10px;
  }

  &__logo {
    cursor: pointer;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 50px;
    margin-left: 60px;
  }

  &__nav-item {
    font-weight: 500;
    font-size: 16px;
    color: #2F385E;
  }

  &__navigation {
    min-width: 56px;
  }

  &__main {
    background: #f3f5fb;
    padding-left: 56px;
  }
}
</style>
