<template>
  <div class="current-balance">
    <p class="current-balance__title">{{ content.title }}</p>
    <p class="current-balance__crypto-currency">
      {{ hidden ? hiddenCryptoCurrency : content.cryptoCurrency }}<icon-show class="current-balance__hidden-icon" @click.native="toggleHidden" />
    </p>
    <p class="current-balance__currency">≈ {{  hidden ? hiddenCurrency : content.currency }}</p>
  </div>
</template>

<script>
import IconShow from "@/components/icon/IconShow";
export default {
  components: {IconShow},
  props: {
    content: {
      type: Object,
      default: () => {
        return {
          title: '',
          cryptoCurrency: '',
          currency: '',
        }
      },
    },
  },

  data() {
    return {
      hidden: false,
    }
  },

  methods: {
    toggleHidden() {
      this.hidden = !this.hidden
    }
  },

  computed: {
    hiddenCryptoCurrency() {
      return '*'.repeat(this.content.cryptoCurrency.length)
    },
    hiddenCurrency() {
      return '*'.repeat(this.content.currency.length)
    }
  }
}
</script>

<style lang="scss" scoped>
.current-balance {
  &__title,
  &__crypto-currency {
    margin: 0 0 5px;
    font-size: 24px;
    line-height: 28px;
    color: #2F385E;
  }

  &__crypto-currency {
    font-weight: 600;
    display: inline-flex;
    align-items: center;
  }

  &__hidden-icon {
    opacity: 0.4;
    margin-left: 5px;
    cursor: pointer;
  }

  &__currency {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    margin: 0;
    color: rgba(47, 56, 94, 0.4);
  }
}
</style>
