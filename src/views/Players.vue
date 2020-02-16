<template>
  <div id="Players">
    <v-row no-gutters>
      <v-col
        v-for="player in this.players"
        :key="player.id"
        cols="12"
        sm="3"
      >
        <Player
          :player="player"
        />
        <br>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Player from '../components/Player.vue'
import { mapState, mapGetters, mapActions } from 'vuex'

@Component({
  components: {
    Player
  }
})
export default class Players extends Vue {
  /** computed */
  private get players (): any {
    return this.$store.getters.getPlayers
  }

  /** ライフサイクルフック */
  private created () {
    this.$store.dispatch('fetchPlayers')
      .catch(err => Promise.reject(err))
      .then(() => {
        console.log('OK')
      })
  }
}
</script>
