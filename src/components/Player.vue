<template>
  <v-card
    @click="goDetail"
  >
    <v-row no-gutters>
      <v-col
        sm="2"
        md="12"
      >
        <v-img :src="player.thumbnail"></v-img>
      </v-col>
      <v-col sm="9" md="12">
        <v-card-title > {{player.name}} </v-card-title>
        <v-card-subtitle> 公開日：{{player.published}} </v-card-subtitle>
        <v-chip class="ma-2" text-color="white" :class="kindColor(player.site)">
          {{ siteName(player.site) }}
        </v-chip>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Player extends Vue {
  site = { youtube: 'YouTube', niconico: 'NicoNico' }
  kindColors = { youtube: 'red', niconico: 'default' }

  @Prop()
  public player?: any;

  kindColor (site: number): string {
    switch (site) {
      case 0:
        return this.kindColors.youtube
      default:
        return this.kindColors.niconico
    }
  }

  siteName (site: number): string {
    switch (site) {
      case 0:
        return this.site.youtube
      default:
        return this.site.niconico
    }
  }

  goDetail (): void {
    // this.$router.push({ name: 'PlayerDetail', params: { id: this.player.id } })
  }
}
</script>

<style scoped>
.v-card {
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 10px;
  margin-left: 10px;
}
</style>
