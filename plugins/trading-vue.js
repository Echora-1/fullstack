import Vue from 'vue'
import TradingVue, { DataCube } from 'trading-vue-js'

Vue.use(TradingVue)
Vue.component('TradingVue', TradingVue)

export default ({ app }, inject) => {
  inject('DataCube', DataCube)
}
