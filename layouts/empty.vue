<template>
  <div :class="['empty-layout', {'empty-layout--dark': isDarkTheme }]">
    <empty-header />
    <main class="empty-layout__main">
      <Nuxt />
    </main>
    <empty-footer />
  </div>
</template>
<script>
import {mapActions} from "vuex";
import EmptyHeader from "@/components/empty/EmptyHeader";
import EmptyFooter from "@/components/empty/EmptyFooter";
import getCurrentTheme from "@/mixins/getCurrentTheme";
export default {
  components: {EmptyFooter, EmptyHeader},
  mixins: [getCurrentTheme],
  created() {
    if(this.$cookies.get('theme') === 'dark') {
      this.setTheme('dark')
    }
  },

  methods: {
    ...mapActions({setTheme: 'setTheme'})
  },
}
</script>

<style lang="scss" scoped>
.empty-layout {
  overflow: hidden;
  background:  #F1F3F8;

  &--dark {
    background:  #0A1022;
  }

  &__main {
    height: calc(100vh - 58px);
  }
}
</style>
