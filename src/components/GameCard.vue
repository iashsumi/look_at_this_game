<template>
  <v-card
    class="mx-auto"
    max-width="860"
    outlined
    :elevation="3"
  >

    <v-list-item three-line>
      <div>
        <v-list-item-avatar
          tile
          size="80"
          color="grey"
        >
          <v-img></v-img>
        </v-list-item-avatar>
        <v-list-item-subtitle>作成：{{ game.avatar_credit }}</v-list-item-subtitle>
      </div>
      <v-list-item-content>
        <v-list-item-title class="headline">{{ game.title }}</v-list-item-title>
        <v-list-item-subtitle>発売日：{{ game.released_at }}</v-list-item-subtitle>
        <v-list-item-subtitle>販売本数:{{ game.sales }}</v-list-item-subtitle>
        <v-list-item-subtitle>販売元:{{ game.publisher }}</v-list-item-subtitle>
        <span class="overline">
          <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
          <v-chip class="ma-2" :class="genreColor(game.genre)">{{ game.genre }}</v-chip>
        </span>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

@Component
export default class GameCard extends Vue {
  kinds = { sfc: 'primary', default: 'default' }
  genres = { rpg: 'primary', default: 'default' }

  @Prop()
  public game?: any;

  kindColor (kind: string): string {
    switch (kind) {
      case 'SFC':
        return this.kinds.sfc
      default:
        return this.kinds.default
    }
  }

  genreColor (genre: string): string {
    switch (genre) {
      case 'RPG':
        return this.genres.rpg
      default:
        return this.genres.default
    }
  }
}
</script>
