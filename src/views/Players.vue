<template>
  <div id="Players">
    <v-row no-gutters>
      <v-col
        v-for="player in this.players"
        :key="player.user_id"
        cols="12"
        sm="12"
      >
        <Player
          :player="player"
        />
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
  }
}
</script>
