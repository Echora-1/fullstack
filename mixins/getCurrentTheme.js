export default {
  computed: {
    currentTheme() {
      return this.$store.state.theme
    },

    isDarkTheme() {
      return this.$store.getters.isDarkTheme
    },
  },
}
