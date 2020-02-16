<template>
  <div id="RssList">
    <br>
    <v-row no-gutters>
      <v-col
        v-for="info in this.rss.rss_informations"
        :key="info.id"
        cols="12"
        sm="12"
      >
        <RssInfo
          :info="info"
        />
        <br>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RssInfo from '../components/RssInfo.vue'
import { mapState, mapGetters, mapActions } from 'vuex'

@Component({
  components: {
    RssInfo
  }
})
export default class Rss extends Vue {
  disp: boolean = false

  /** methods */
  private changeDisp (): void {
    this.disp = !this.disp
  }

  /** computed */
  private get rss (): any {
    return this.$store.getters.getRss
  }

  /** ライフサイクルフック */
  private created () {
    this.$store.dispatch('fetchRss')
      .catch(err => Promise.reject(err))
      .then(() => {
        console.log('OK')
      })
  }
}
</script>
