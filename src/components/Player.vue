<template>
  <v-card
    @click="goUserPage"
  >
    <v-row no-gutters>
      <v-col
        xs="12"
        md="1"
      >
        <v-avatar size="64px">
          <v-img :src="player.thumbnail_url"></v-img>
        </v-avatar>
      </v-col>
      <v-col
        xs="12"
        md="11"
      >
        <v-list-item three-line>
          <v-list-item-content>
              <v-list-item-title class="headline">{{ player.name }}</v-list-item-title>
              <v-list-item-subtitle>
                <v-chip class="ma-2" text-color="white" :class="this.kindColor(player.site_kbn)">
                  {{ this.siteName(player.site_kbn) }}
                </v-chip>
              </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Mixins } from 'vue-property-decorator'
import Site from '../common/site'

@Component
export default class Player extends Mixins(Site) {
  @Prop()
  public player?: any;

  goUserPage (): void {
    window.open(this.siteUserPage(this.player.site_kbn, this.player.user_id), '_blank')
  }

  siteUserPage (site: string, userId: string): string {
    switch (site) {
      case 'youtube':
        return 'https://www.youtube.com/channel/' + userId
      default:
        return 'https://www.nicovideo.jp/user/' + userId
    }
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
