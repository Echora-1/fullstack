<template>
  <div :class="['tabs', { 'tabs--dark': isDarkTheme }]">
    <div class="tabs__header-wrap">
      <h2 :class="['tabs__title', 'base-h2', { 'base-h2--dark': isDarkTheme }]">
        {{ title }}
      </h2>
      <ul class="tabs__header">
        <li
          v-for="(tab, index) in tabs"
          :key="tab.title"
          :class="{ tab__selected: index === selectedIndex }"
          @click="selectTab(index)"
        >
          <span>{{ tab.title }}</span>
        </li>
      </ul>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import getCurrentTheme from '@/mixins/getCurrentTheme'

export default {
  mixins: [getCurrentTheme],
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      selectedIndex: 0,
      tabs: [],
    }
  },
  created() {
    this.tabs = this.$children
  },
  mounted() {
    this.selectTab(0)
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i

      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.tabs {
  &__header-wrap {
    padding: 0 22px;
    margin-bottom: 45px;
    display: flex;

    @media(max-width: 1023px) {
      flex-direction: column;
    }

    @media(max-width: 767px) {
      padding: 0;
      margin-bottom: 35px;
    }
  }

  &__title {
    margin: 0;
  }

  &__header {
    display: flex;
    list-style: none;
    padding: 0;
    align-items: center;
    margin: 0 0 0 auto;

    @media(max-width: 1023px) {
      margin: 0;
    }

    @media(max-width: 767px) {
      overflow-y: scroll;
    }

    li {
      font-weight: 500;
      font-size: 18px;
      color: #161c2f59;
      cursor: pointer;
      min-height: 55px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      @media(max-width: 767px) {
        min-width: fit-content;
      }


      &:not(:first-child) {
        margin-left: 65px;

        @media(max-width: 1023px) {
          margin-left: 40px;
        }
      }
    }

    span {
      display: inline-flex;
      align-items: center;
    }
  }
}

li.tab__selected {
  color: #161c2f;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: linear-gradient(77.9deg, #0066ff -3.83%, #2ce0c5 110.36%);
    bottom: 0;
    left: 0;
  }
}

.tabs--dark {
  li {
    color: #FFFFFF59;
  }

  li.tab__selected {
    color: #FFFFFF;
  }
}

</style>
