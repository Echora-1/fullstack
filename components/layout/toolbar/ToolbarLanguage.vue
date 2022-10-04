<template>
  <v-menu
    offset-y
    left
    transition='slide-y-transition'
  >
    <template #activator='{ on }'>
      <v-btn text v-on='on'>
        <flag-icon></flag-icon>
        <v-icon v-if='showArrow' right>mdi-chevron-down</v-icon>
      </v-btn>
    </template>

    <v-list dense nav>
      <v-list-item-group>
        <v-list-item v-for='(_, index) in 2' :key='index'>
          <flag-icon :class="['mx-auto']"></flag-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
import FlagIcon from '../../common/FlagIcon';

/*
|---------------------------------------------------------------------
| Language Switcher Component
|---------------------------------------------------------------------
|
| Locale menu to choose the language based on the locales present in
| vue-i18n locales available array
|
*/
export default {
  components: {
    FlagIcon,
  },
  props: {
    // Show dropdown arrow
    showArrow: {
      type: Boolean,
      default: false,
    },
    // Show the country label
    showLabel: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    currentLocale() {
      return this.$i18n.locales.find((i) => i.code === this.$i18n.locale);
    },
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>
