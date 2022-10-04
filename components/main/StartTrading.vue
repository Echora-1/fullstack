<template>
  <div class="start-trading e-container">
      <h2 :class="['base-h2', {'base-h2--dark': isDarkTheme}]">{{ $t('title') }}</h2>
      <p :class="['base-subtitle', {'base-subtitle--dark': isDarkTheme}]">{{ $t('subtitle') }}</p>
    <base-button>
      {{ $t('signUpNow') }}
    </base-button>
  </div>
</template>

<i18n>
{
  "en": {
    "title": "Start Trading Today",
    "subtitle": "Trade Bitcoin and other cryptos in 3 minutes.",
    "signUpNow": "Sign Up Now"
  },
  "ch": {
    "title": "Start Trading Today",
    "subtitle": "Trade Bitcoin and other cryptos in 3 minutes.",
    "signUpNow": "Sign Up Now"
  }
}
</i18n>

<script>
import BaseButton from "@/components/base/BaseButton";
import getCurrentTheme from "@/mixins/getCurrentTheme";
export default {
  components: {BaseButton},
  mixins: [getCurrentTheme],
}
</script>

<style lang="scss" scoped>
.base-h2 {
  margin: 0 0 15px;
}

.base-subtitle {
  margin: 0 0 30px;

  @media(max-width: 767px) {
    max-width: 250px;
    text-align: center;
  }
}

.start-trading {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
