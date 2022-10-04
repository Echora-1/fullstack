<template>
  <footer :class="['base-footer', { 'base-footer--dark': isDarkTheme }]">
    <div class="base-footer__wrap e-container">
      <div class="base-footer__header header">
        <div class="header__left">
          <nuxt-link :to="localePath('/')">
            <icon-logo class="header__logo" />
          </nuxt-link>
          <p>USD</p>
          <icon-local class="header__local" />
        </div>
        <div class="header__right">
          <div class="header__stats">
            <div
              v-for="({ name, value }, index) in $t('stats')"
              :key="index"
              class="stats"
            >
              <p class="stats__name">{{ name }}</p>
              <p class="stats__value">{{ value }}</p>
            </div>
          </div>
          <div class="header__download-app">
            <p>Download app:</p>
            <icon-ios />
            <icon-android />
          </div>
        </div>
      </div>
      <div class="base-footer__main main">
        <div class="main__left">
          <p class="main__text">{{ $t('text') }}</p>
          <div class="main__social">
            <a href="/"> <icon-instagram /></a>
            <a href="/"> <icon-telegram /></a>
            <a href="/"> <icon-facebook /></a>
            <a href="/"> <icon-twitter /></a>
            <a href="/"> <icon-medium /></a>
          </div>
          <p class="main__copyright">{{ $t('copyright') }}</p>
        </div>
        <div class="main__right">
          <ul :key="index" class="main__nav" v-for="(list, index) in $t('nav')">
            <li v-for="({ name, link }, i) in list" :key="i" class="main__link">
              <nuxt-link :to="localePath(link)">
                {{ name }}
              </nuxt-link>
            </li>
          </ul>
          <p class="main__mb-copyright">{{ $t('copyright') }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<i18n>
{
  "en": {
    "stats": [
      {
        "name": "Volume 24h",
        "value": "$382,826"
      },
      {
        "name": "Active traders",
        "value": "39,840"
      }
    ],
    "copyright": "© TBCC Copyright 2022",
    "text": "TBCC Exchange is a leading cryptocurrency trading platform in the world.",
    "nav": [
      [ {
        "name": "Company",
        "link": "/"
      },
        {
          "name": "About",
          "link": "/"
        },
        {
          "name": "Blog",
          "link": "/"
        },
        {
          "name": "News",
          "link": "/"
        },
        {
          "name": "Affiliates",
          "link": "/"
        },
        {
          "name": "Legal & Privacy",
          "link": "/"
        }
      ],
        [     {
          "name": "Products",
          "link": "/"
        },
          {
            "name": "Exchange",
            "link": "/"
          },
          {
            "name": "TBCC Token",
            "link": "/"
          },
          {
            "name": "TBCC Pay",
            "link": "/"
          },
          {
            "name": "TBCC Wallet",
            "link": "/"
          }],
      [      {
        "name": "Support",
        "link": "/"
      },
        {
          "name": "FAQ",
          "link": "/"
        },
        {
          "name": "Api Docs",
          "link": "/"
        },
        {
          "name": "Contact Us",
          "link": "/"
        }]
    ]
  },
  "ch": {
    "stats": [
      {
        "name": "Volume 24h",
        "value": "$382,86"
      },
      {
        "name": "Active traders",
        "value": "39,840"
      }
    ],
    "copyright": "© TBCC Copyright 2022",
    "text": "TBCC Exchange is a leading cryptocurrency trading platform in the world.",
    "nav": [
      {
        "name": "Company",
        "link": "/"
      },
      {
        "name": "About",
        "link": "/"
      },
      {
        "name": "Blog",
        "link": "/"
      },
      {
        "name": "News",
        "link": "/"
      },
      {
        "name": "Affiliates",
        "link": "/"
      },
      {
        "name": "Legal & Privacy",
        "link": "/"
      },
      {
        "name": "Products",
        "link": "/"
      },
      {
        "name": "Exchange",
        "link": "/"
      },
      {
        "name": "TBCC Token",
        "link": "/"
      },
      {
        "name": "TBCC Pay",
        "link": "/"
      },
      {
        "name": "TBCC Wallet",
        "link": "/"
      },
      {
        "name": "Support",
        "link": "/"
      },
      {
        "name": "FAQ",
        "link": "/"
      },
      {
        "name": "Api Docs",
        "link": "/"
      },
      {
        "name": "Contact Us",
        "link": "/"
      }
    ]
  }
}
</i18n>

<script>
import IconLogo from '@/components/icon/IconLogo'
import IconLocal from '@/components/icon/IconLocal'
import IconIos from '@/components/icon/IconIos'
import IconAndroid from '@/components/icon/IconAndroid'
import IconInstagram from '@/components/icon/IconInstagram'
import IconTelegram from '@/components/icon/IconTelegram'
import IconFacebook from '@/components/icon/IconFacebook'
import IconTwitter from '@/components/icon/IconTwitter'
import IconMedium from '@/components/icon/IconMedium'
import getCurrentTheme from '@/mixins/getCurrentTheme'
export default {
  components: {
    IconMedium,
    IconTwitter,
    IconFacebook,
    IconTelegram,
    IconInstagram,
    IconAndroid,
    IconIos,
    IconLocal,
    IconLogo,
  },
  mixins: [getCurrentTheme],
}
</script>

<style lang="scss" scoped>
.base-footer {
  background: #ebeef3;
  display: flex;
  padding-top: 60px;

  @media(max-width: 767px) {
    max-width: 425px;
  }
}

.header {
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(22, 28, 47, 0.05);
  margin-bottom: 35px;

  @media(max-width: 767px) {
    flex-direction: column-reverse;
  }

  &__left {
    display: flex;
    align-items: center;
    padding-right: 40px;

    @media(max-width: 1023px) {
      min-width: 244px;
      margin-right: 20px;
    }

    @media(max-width: 767px) {
      margin: 0;
      padding: 0;
      width: 100%;
    }

    p {
      font-weight: 500;
      font-size: 15px;
      line-height: 16px;
      letter-spacing: 0.01em;
      color: rgba(22, 28, 47, 0.6);

      @media(max-width: 767px) {
        margin-left: auto;
      }
    }
  }

  &__logo {
    margin-right: 32px;
    display: flex;
    color: rgba(22, 28, 47, 1);
  }

  &__local {
    color: #161c2f;
    margin-left: 16px;
  }

  &__right {
    margin-left: auto;
    display: flex;
    align-items: center;
    max-width: 650px;
    width: 100%;

    @media(max-width: 767px) {
     flex-direction: column;
    }
  }

  &__stats {
    display: flex;
    max-width: 310px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;

    @media(max-width: 767px) {
      margin-right: 0;
      max-width: 100%;
      padding-bottom: 25px;
    }
  }

  &__download-app {
    display: flex;
    align-items: center;
    margin-left: auto;
    color: #161c2f;

    @media(max-width: 767px) {
      margin-left: 0;
      width: 100%;
      padding-bottom: 25px;
    }

    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: rgba(22, 28, 47, 0.3);
      margin: 0 auto 0 0;
    }

    svg {
      margin-left: 25px;
    }
  }
}

.stats {
  display: flex;
  flex-direction: column;

  &__name {
    font-weight: 500;
    font-size: 14px;
    line-height: 26px;
    color: rgba(22, 28, 47, 0.3);
    margin: 0 0 5px;
  }

  &__value {
    font-weight: 500;
    font-size: 20px;
    color: #161c2f;
    margin: 0;
  }
}

.main {
  display: flex;

  @media(max-width: 767px) {
    flex-direction: column;
  }

  &__left {
    display: flex;
    flex-direction: column;
    margin-right: 40px;


    @media(max-width: 767px) {
      margin: 0;
      text-align: center;
    }
  }

  &__text {
    font-size: 16px;
    line-height: 24px;
    color: #161c2f;
    opacity: 0.3;
    margin: 0 0 35px;
    max-width: 360px;

    @media(max-width: 767px) {
      max-width: 100%;
    }
  }

  &__social {
    gap: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 45px;
    color: #161C2F;
  }

  &__copyright {
    font-size: 14px;
    line-height: 23px;
    color: #161c2f;
    opacity: 0.3;

    @media(max-width: 767px) {
      display: none;
    }
  }

  &__mb-copyright {
    display: none;
    font-size: 14px;
    line-height: 23px;
    color: #161c2f;
    opacity: 0.3;

    @media(max-width: 767px) {
      display: block;
      margin-bottom: 40px;
      text-align: center;
    }
  }

  &__right {
    display: flex;
    max-width: 650px;
    width: 100%;
    margin-left: auto;
    justify-content: space-between;

    @media(max-width: 767px) {
      flex-direction: column;
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    width: 33.33%;
    margin-top: 0;

    &:first-child {
      @media(min-width: 768px) {
        margin-right: 42px;
      }
    }

    &:nth-child(2) {
      @media(min-width: 768px) {
        margin-right: 35px;
      }
    }

    &:last-child {
      @media(min-width: 768px) {
        padding-left: 10px;
      }
    }
  }

  &__link {
    font-size: 16px;
    margin-bottom: 45px;

    @media(max-width: 767px) {
      margin-bottom: 40px;
    }

    &:first-child {
      font-weight: 500;
      color: #161c2f;
    }
  }
}

.base-footer--dark {
  background: #0a1022;

  .header {
    border-color: rgba(255, 255, 255, 0.15);

    &__left {
      p {
        color: rgba(255, 255, 255, 0.6);
      }
    }

    &__logo {
      color: #ffffff;
    }

    &__local {
      color: rgba(255, 255, 255, 0.6);
    }

    &__download-app {
      color: #ffffff;
      p {
        color: rgba(255, 255, 255, 0.3);
      }
    }
  }

  .stats {
    &__name {
      color: #ffffff4d;
    }

    &__value {
      color: #ffffff;
    }
  }

  .main {
    &__text {
      color: #ffffff;
      opacity: 0.3;
    }

    &__social {
      color: #FFFFFF99;
    }

    &__copyright,
    &__mb-copyright {
      color: #ffffff;
      opacity: 0.3;
    }

    &__link {
      color: rgba(255, 255, 255, 0.3);

      &:first-child {
        color: #FFFFFF;
      }
    }
  }
}
</style>
