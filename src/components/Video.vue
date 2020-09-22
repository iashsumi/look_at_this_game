<template>
  <v-card
    outlined
    flat
    @click="goPlayPage"
  >

    <v-row no-gutters>
      <v-col
        xs="12"
        sm="3"
        md="2"
      >
        <v-img
          :src="video.thumbnail_url">
        </v-img>
      </v-col>
      <v-col
        xs="12"
        sm="9"
        md="10"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline">{{ video.title }}</v-list-item-title>
            <v-list-item-subtitle>公開日: {{ video.published_at }}</v-list-item-subtitle>
            <v-list-item-subtitle>再生数: {{ video.view_count }}  (更新日:{{ video.updated_at }})</v-list-item-subtitle>
            <v-list-item-subtitle>実況者: {{ video.commentator_name }} <span :class="this.kindColor(video.site_kbn)">{{ this.siteName(video.site_kbn) }}</span></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Mixins } from 'vue-property-decorator'
import Site from '../common/site'

@Component
export default class Video extends Mixins(Site) {
  dialog = false;

  @Prop()
  public video?: any;

  goPlayPage (): void {
    window.open(this.video.link, '_blank')
  }
}
</script>

<style scoped>
.v-card {
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
}
</style>
