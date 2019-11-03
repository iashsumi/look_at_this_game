<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline header">
          <v-chip>{{ game.kind }}</v-chip>
          <span>{{ game.genre }}</span>
        </div>
        <v-list-item-title class="headline mb-1">{{ game.title }}</v-list-item-title>
      </v-list-item-content>

      <!-- <v-list-item-content>
        <v-list-item-title>販売元</v-list-item-title>
        <v-list-item-subtitle>{{ game.publisher }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar> -->
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

// interface typkindColors{(key:string, val:string) :void};
export default Vue.extend({
  name: 'GameCard',
  // data: () => ({
  //   kindColors: {
  //     sfc: 'primary'
  //   }
  // }),
  props: {
    game: {
      tyep: Object,
      required: true
    }
  }
  // methods: {
  //   kind_color (kind: string) : (string) {
  //     return this.kindColors
  //   }
  // }
})
</script>

<style lang="scss">
#header {
  margin-bottom: 3px
}

// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
