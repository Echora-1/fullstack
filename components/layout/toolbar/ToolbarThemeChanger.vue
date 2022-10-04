<template>
  <v-btn
    class="toolbar-theme-changer"
    icon
    @click="changeTheme"
    color="#2F385E"
  >
    <v-icon v-if="isDarkTheme">
      mdi-white-balance-sunny
    </v-icon>
    <icon-moon v-else/>
  </v-btn>
</template>

<script>
import IconMoon from "@/components/icon/IconMoon";
export default {
  components: {IconMoon},
  data() {
    return {
      isDarkTheme: false
    }
  },

  methods: {
    changeTheme() {
      this.isDarkTheme = !this.isDarkTheme
    }
  }
}
</script>
