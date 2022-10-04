<template>
  <v-menu offset-y left transition="slide-y-transition">
    <template #activator="{ on }">
      <v-btn text v-on="on"
        ><span class="font-weight-bold">{{
          currentCurrencies.currencySymbol
        }}</span
        >{{ currentCurrencies.label }}</v-btn
      >
    </template>

    <!-- currencies list -->
    <v-list dense nav>
      <v-list-item
        v-for="item in currencies"
        :key="item.label"
        @click="setCurrency(item)"
      >
        <v-list-item-title class="text-center">{{
          `${item.currencySymbol} ${item.label}`
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
/*
|---------------------------------------------------------------------
| Toolbar Currency Component
|---------------------------------------------------------------------
|
| Quickmenu to change currency in the toolbar
|
*/
export default {
  data() {
    return {
      currencies: [
        {
          label: 'USD',
          decimalDigits: 2,
          decimalSeparator: '.',
          thousandsSeparator: ',',
          currencySymbol: '$',
          currencySymbolNumberOfSpaces: 0,
          currencySymbolPosition: 'left',
        },
        {
          label: 'EUR',
          decimalDigits: 2,
          decimalSeparator: '.',
          thousandsSeparator: ',',
          currencySymbol: '€',
          currencySymbolNumberOfSpaces: 1,
          currencySymbolPosition: 'right',
        },
      ],
      currentCurrencies: {
        label: 'USD',
        decimalDigits: 2,
        decimalSeparator: '.',
        thousandsSeparator: ',',
        currencySymbol: '$',
        currencySymbolNumberOfSpaces: 0,
        currencySymbolPosition: 'left',
      },
    }
  },

  methods: {
    setCurrency(currency) {
      this.currentCurrencies = currency
    },
  },
}
</script>
