<template>
  <header
    :class="[
      'base-header',
      {
        'base-header--menu-open': isShowMenu,
        'base-header--scroll': scroll,
        'base-header--scroll-dark': scroll && isDarkTheme,
        'base-header--menu-open-dark': isShowMenu && isDarkTheme,
        'base-header--dark': isDarkTheme,
      },
    ]"
  >
    <div class="e-container">
      <nuxt-link :to="localePath('/')" class="base-header__logo">
        <icon-logo />
      </nuxt-link>
      <nav class="base-header__nav">
        <ul class="base-header__nav-list">
          <nuxt-link
            v-for="(link, index) in $t('links')"
            :key="index"
            class="base-header__link"
            :to="localePath(link.url)"
            @click.native="closeMenu"
          >
            {{ link.name }}</nuxt-link
          >
        </ul>
        <nuxt-link
          v-show="!isAuthenticated"
          class="base-header__log-in"
          :to="localePath('/log-in')"
          @click.native="closeMenu"
        >
          Log In
        </nuxt-link>
        <nuxt-link
          v-show="!isAuthenticated"
          class="base-header__sign-up"
          :to="localePath('/sign-up')"
          @click.native="closeMenu"
        >
          <base-button> Sign Up </base-button>
        </nuxt-link>
        <base-button
          v-show="isAuthenticated"
          class="base-header__logout"
          @click.native="logOut"
        >
          Logout
        </base-button>
        <button class="base-header__theme" @click="toggleTheme">
          <icon-solar v-if="isDarkTheme" />
          <icon-theme v-else />
          <span v-if="isDarkTheme">Switch to Light Mode</span>
          <span v-else>Switch to Dark Mode</span>
        </button>
      </nav>
      <menu-button
        class="base-header__menu-button"
        :active="isShowMenu"
        @click.native="toggleShowMenu"
      />
    </div>
  </header>
</template>

<i18n>
{
  "en": {
    "links": [ { "name": "Markets", "url": "/trading" }, { "name": "Spot", "url": "/dashboard" }, { "name": "Derivatives", "url": "/" }, { "name": "Token", "url": "/" }]
  },
  "ch": {
    "links": [ { "name": "Markets", "url": "/trading" }, { "name": "Spot", "url": "/dashboard" }, { "name": "Derivatives", "url": "/" }, { "name": "Token", "url": "/" }]
  }
}
</i18n>

<script>
import { mapActions, mapGetters } from 'vuex'
import IconLogo from '~/components/icon/IconLogo'
import BaseButton from '~/components/base/BaseButton'
import IconTheme from '~/components/icon/IconTheme'
import IconSolar from '~/components/icon/IconSolar'
import getCurrentTheme from '@/mixins/getCurrentTheme'
export default {
  components: { IconSolar, IconTheme, BaseButton, IconLogo },
  mixins: [getCurrentTheme],
  data() {
    return {
      isShowMenu: false,
      scroll: false,
    }
  },

  computed: {
    ...mapGetters({ isAuthenticated: 'isAuthenticated' }),
  },

  watch: {
    isShowMenu() {
      if (this.isShowMenu && window.innerWidth < 1001) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'visible'
      }
    },
  },

  mounted() {
    window.addEventListener('scroll', this.scrollHeader)
  },

  methods: {
    ...mapActions({
      toggleTheme: 'toggleTheme',
      setAuthenticated: 'setAuthenticated',
    }),

    toggleShowMenu() {
      this.isShowMenu = !this.isShowMenu
    },

    closeMenu() {
      this.isShowMenu = false
    },

    scrollHeader() {
      if (window.scrollY >= 70) {
        this.scroll = true
      } else {
        this.scroll = false
      }
    },

    logOut() {
      this.$cookies.remove('token')
      this.setAuthenticated(false)
      this.$router.push(this.localePath('/log-in'))
    },
  },
}
</script>

<style lang="scss" scoped>
.e-container {
  position: relative;
  max-width: 1168px;
  display: flex;
  padding: 20px;
  align-items: center;

  @media (max-width: 1000px) {
    padding: 0 20px;
    align-items: center;
  }
}

.base-header {
  z-index: 10;
  display: flex;
  align-items: center;
  min-height: 45px;
  position: fixed;
  top: 28px;
  width: 100%;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 767px) {
    top: 15px;
  }

  &__logo {
    display: flex;
    color: rgba(22, 28, 47, 1);
  }

  &--scroll {
    top: 0;
    background: #f1f3f8;
  }

  &--menu-open {
    background: #f1f3f8;

    @media (max-width: 1000px) {
      .base-header__nav {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }

  &__nav {
    display: flex;
    width: 100%;

    @media (max-width: 1000px) {
      position: absolute;
      left: 0;
      right: 0;
      bottom: calc(65px - 100vh);
      background: #f1f3f8;
      padding: 30px 26px 20px;
      min-height: calc(100vh - 65px);
      opacity: 0;
      transform: translateX(200%);
      transition: transform 1s;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }

    @media (min-width: 1001px) {
      margin-left: auto;
      align-items: center;
    }
  }

  &__log-in {
    font-weight: 500;
    font-size: 14px;
    line-height: 28px;
    color: #161c2f;

    @media (max-width: 1000px) {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 25px;
    }
  }

  &__nav-list {
    margin: 0 auto;

    @media (max-width: 1000px) {
      margin: 0;
      display: flex;
      flex-direction: column;
    }
  }

  &__link {
    font-size: 16px;
    line-height: 28px;

    @media (min-width: 1001px) {
      margin-left: 55px;
    }

    @media (max-width: 1000px) {
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 36px;
    }
  }

  &__theme {
    background: transparent;
    border: none;
    min-width: 20px;
    height: 20px;
    cursor: pointer;
    margin-left: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    @media (max-width: 767px) {
      align-self: center;
    }

    span {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #132d55;
      opacity: 0.6;

      @media (min-width: 1001px) {
        display: none;
      }
    }

    @media (max-width: 1000px) {
      margin: 50px 0 30px;

      svg {
        margin-right: 6px;
      }
    }
  }

  .base-header__sign-up {
    button {
      margin-left: 25px;
      padding: 6px 20px;
      border-radius: 10px;
      font-weight: 600;
      font-size: 14px;
      line-height: 28px;

      @media (max-width: 1000px) {
        margin-left: 0;
        min-width: 272px;
        min-height: 60px;
      }
    }

    @media (max-width: 767px) {
      align-self: center;
    }
  }

  .base-header__logout {
    margin-left: 25px;
    padding: 6px 20px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 14px;
    line-height: 28px;

    @media (max-width: 1000px) {
      margin-left: 0;
      min-width: 272px;
      min-height: 60px;
    }

    @media (max-width: 767px) {
      align-self: center;
    }
  }

  &__menu-button {
    margin-left: auto;
    @media (min-width: 1001px) {
      display: none;
    }
  }

  &--dark {
    .base-header__logo {
      color: #ffffff;
    }

    .base-header__link {
      color: rgba(255, 255, 255, 0.6);
    }

    .base-header__log-in {
      color: #ffffff;
    }

    .base-header__theme {
      opacity: 0.6;
    }

    .base-header__menu-button {
      color: white;
    }

    .base-header__nav {
      background: #0a1022;
    }

    .base-header__theme {
      span {
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }

  &--scroll-dark {
    background: #0a1022;
  }

  &--menu-open-dark {
    background: #0a1022;
  }
}
</style>
