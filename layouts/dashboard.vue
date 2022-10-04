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
        <nuxt-link class="dashboard__nav-item" :to="localePath('/trading')"
          >Trade</nuxt-link
        >
        <nuxt-link class="dashboard__nav-item" :to="localePath('/dashboard')"
          >Markets</nuxt-link
        >
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

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      clipped
      app
      color="#F3F5FB"
      class="dashboard__navigation"
      permanent
    >
      <v-list nav>
        <v-list-item>
          <button-drawer :active="mini" @click="mini = !mini" />
        </v-list-item>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="({ icon, title, link }, index) of nav"
            :key="index"
            link
            :to="localePath(`/${link}`)"
          >
            <v-list-item-icon class="d-flex justify-center align-center">
              <component :is="icon" />
            </v-list-item-icon>
            <v-list-item-title class="font-weight-medium">{{
              title
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="dashboard__main">
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>
<script>
import { fromBytes } from "utf8-uint8array";
import Centrifuge from 'centrifuge/dist/centrifuge.protobuf';
import {mapActions, mapGetters} from 'vuex'
import IconLogo from '@/components/icon/IconLogo'
import IconDashboard from '@/components/icon/nav/IconDashboard'
import IconOrders from '@/components/icon/nav/IconOrders'
import IconProfile from '@/components/icon/nav/IconProfile'
import IconReferral from '@/components/icon/nav/IconReferral'
import IconSettings from '@/components/icon/nav/IconSettings'
import IconSupport from '@/components/icon/nav/IconSupport'
import IconTransactions from '@/components/icon/nav/IconTransactions'
import IconWallets from '@/components/icon/nav/IconWallets'
import ToolbarThemeChanger from '@/components/layout/toolbar/ToolbarThemeChanger'
import ToolbarNotifications from '@/components/layout/toolbar/ToolbarNotifications'
import ToolbarLanguage from '@/components/layout/toolbar/ToolbarLanguage'
import ToolbarCurrency from '@/components/layout/toolbar/ToolbarCurrency'
import ToolbarUser from '@/components/layout/toolbar/ToolbarUser'
import ButtonDrawer from '@/components/common/ButtonDrawer'

export default {
  components: {
    ButtonDrawer,
    ToolbarUser,
    ToolbarLanguage,
    ToolbarNotifications,
    IconWallets,
    IconTransactions,
    IconSupport,
    IconSettings,
    IconReferral,
    IconProfile,
    IconOrders,
    IconDashboard,
    IconLogo,
    ToolbarThemeChanger,
    ToolbarCurrency,
  },
  data() {
    return {
      nav: [
        { title: 'Dashboard', icon: IconDashboard, link: 'dashboard' },
        { title: 'Wallets', icon: IconWallets, link: 'wallets' },
        { title: 'Orders', icon: IconOrders, link: 'orders' },
        { title: 'Transactions', icon: IconTransactions, link: 'transactions' },
        {
          title: 'Referral payments',
          icon: IconReferral,
          link: 'referralPayments',
        },
        { title: 'Support', icon: IconSupport, link: 'support' },
        { title: 'Profile', icon: IconProfile, link: '' },
        { title: 'Settings', icon: IconSettings, link: '' },
      ],
      drawer: true,
      mini: true,
      user: null,
      wsToken: ''
    }
  },


  computed: {
    ...mapGetters({ getUserId: 'user/getUserId' }),
  },

  async created() {
    const token = this.$cookies.get('token')
    const user = await this.$api('users', 'user', {
      token
    })
    this.user = user
    this.setUserId(user.id)
    this.setLastLogin(user.lastLoginAt)
    const balances = await this.$api('users', 'balances', {
      id: user.id
    })
    const jtwToken =  await this.$api('users', 'jwtToken', {
      id: user.id
    })
    this.wsToken = jtwToken.token
    this.setBalances(balances.data)
  },

  async mounted() {
    const centrifuge = await new Centrifuge('wss://web.tbcc.info/ws?format=protobuf')

    const tickers = centrifuge.subscribe('public:tickers')

    tickers.on("publish", function(ctx) {
      console.log(fromBytes(ctx.data));
    });

    tickers.subscribe()
    centrifuge.connect();

/*      await this.$api('users', 'csrfToken')
     const privateCentrifuge = await  new Centrifuge('wss://web.tbcc.info/ws?format=protobuf', {
       debug: true,
     })
     await privateCentrifuge.setToken(this.wsToken);
     privateCentrifuge.on("publish", function(ctx) {
       console.log(fromBytes(ctx.data));
     });


    privateCentrifuge.connect(); */
  },


  methods: {
    ...mapActions(
      {
        setUserId: 'user/setUserId',
        setLastLogin: 'user/setLastLogin',
        setBalances: 'user/setBalances'
      }),


    toMainPage() {
      this.$router.push(this.localePath('/'))
    },
  },
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
    color: #2f385e;
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
