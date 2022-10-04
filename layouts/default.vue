 <template>
  <div class="default-layouts">
    <base-header />
    <main>
      <Nuxt />
    </main>
    <base-footer />
  </div>
</template>
<script>
import {mapActions} from "vuex";
import BaseHeader from '~/components/base/BaseHeader'
import BaseFooter from '~/components/base/BaseFooter'

export default {
  components: { BaseFooter, BaseHeader },

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
.default-layouts {
  overflow: hidden;
}
</style>
