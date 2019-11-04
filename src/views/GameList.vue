<template>
  <div id="GameList">
    <v-btn class="ma-2" outlined color="teal" @click="changeDisp()">
      <v-icon>mdi-format-list-bulleted-square</v-icon>
      <span>フィルター</span>
    </v-btn>
    <div v-show="this.disp">
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title>機種</v-list-item-title>
          <v-list-item-subtitle>SFC</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>ジャンル</v-list-item-title>
          <v-list-item-subtitle>RPG</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>販売元</v-list-item-title>
          <v-list-item-subtitle>任天堂</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </div>
    <v-divider></v-divider>
    <br>
    <v-row no-gutters>
      <v-col
        v-for="game in this.games.games"
        :key="game.id"
        cols="12"
        sm="12"
      >
        <GameCard
          :game="game"
        />
        <br>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import GameCard from '../components/GameCard.vue'
import { mapState, mapGetters, mapActions } from 'vuex'

@Component({
  components: {
    GameCard
  }
})
export default class GameList extends Vue {
  disp: boolean = false

  /** methods */
  private changeDisp (): void {
    this.disp = !this.disp
  }

  /** computed */
  private get games (): any {
    return this.$store.getters.getGames
  }

  /** ライフサイクルフック */
  private created () {
    this.$store.dispatch('fetchGames')
      .catch(err => Promise.reject(err))
      .then(() => {
        console.log('OK')
      })
  }
}
</script>
