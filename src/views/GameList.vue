<template>
  <div id="GameList">
    <p>最近発売されたゲーム</p>
    <p>{{ games }}</P>
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
import Vue from 'vue'
// @ts-ignore
import GameCard from '../components/GameCard.vue'
import { mapState, mapGetters, mapActions } from 'vuex'
export default Vue.extend({
  name: 'GameList',
  components: {
    GameCard
  },
  data: () => ({
    //
  }),
  computed: mapState({
    games: (state: any) => state.list.games
  }),
  created () {
    this.$store.dispatch('fetchGames')
      .catch(err => Promise.reject(err))
      .then(() => {
        console.log('OK')
      })
  }
})
</script>
