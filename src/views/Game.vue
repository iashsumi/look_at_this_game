<template>
  <div id="Game">
    <p>{{ game.id }}</p>
    <p>{{ game.title }}</p>
    <p>{{ game.released_at }}</p>
    <p>{{ game.publisher }}</p>
    <p>{{ game.kind }}</p>
    <p>{{ game.description }}</p>
    <p>{{ game.sales }}</p>
    <p>{{ game.genre }}</p>
    <p>{{ game.avatar }}</p>
    <p>{{ game.avatar_credit }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { mapState, mapGetters, mapActions } from 'vuex'

@Component
export default class Game extends Vue {
  /** computed */
  private get game (): any {
    return this.$store.getters.getGame
  }

  /** ライフサイクルフック */
  private created () {
    this.$store.dispatch('fetchGame')
      .catch(err => Promise.reject(err))
      .then(() => {
        console.log('OK')
      })
  }
}
</script>
