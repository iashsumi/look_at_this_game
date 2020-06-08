<template>
  <v-card
    outlined
    :elevation="3"
    @click="goPlayPage"
  >

    <v-row no-gutters>
      <v-col
        xs="12"
        md="2"
      >
        <v-img :src="video.thumbnail_url"></v-img>
      </v-col>
      <v-col
        xs="12"
        md="10"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline">{{ video.title }}</v-list-item-title>
            <v-list-item-subtitle>公開日: {{ video.published_at }}</v-list-item-subtitle>
            <v-list-item-subtitle>再生数: {{ latestView() }}</v-list-item-subtitle>
            <v-list-item-subtitle>実況者: {{ video.channel_name }}</v-list-item-subtitle>
            <v-list-item-subtitle>最終データ更新日: {{ video.updated_at }}</v-list-item-subtitle>
            <v-list-item-subtitle>
              <v-chip class="ma-2" :class="this.kindColor(video.site_id)">{{ this.siteName(video.site_id) }}</v-chip>
              <v-chip
                class="ma-2"
                color="indigo"
                text-color="white"
                @click.stop="dialog = true"
              >
                <v-avatar left>
                  <v-icon>mdi-details</v-icon>
                </v-avatar>
                詳細
              </v-chip>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-dialog
        v-model="dialog"
      >
        <v-card>
          <v-card-title class="headline">チャンネル</v-card-title>
          <v-card-text>
            {{video.channel_name}}
          </v-card-text>
          <v-card-title class="headline">再生回数の推移</v-card-title>
          <v-card-text>
            <line-chart :chart-data="buildDataCollection()"></line-chart>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Mixins } from 'vue-property-decorator'
import LineChart from '../chart/LineChart'
import Site from '../common/site'

@Component({
  components: {
    LineChart
  }
})
export default class Video extends Mixins(Site) {
  dialog = false;

  @Prop()
  public video?: any;

  goPlayPage (): void {
    window.open(this.video.link, '_blank')
  }

  latestView (): String {
    const sortedKeys = Object.keys(this.video.views).sort()
    const latestSortKey = sortedKeys[sortedKeys.length - 1]
    return parseInt(this.video.views[latestSortKey]).toLocaleString()
  }

  buildDataCollection (): Object {
    let sortedKeys = Object.keys(this.video.views).sort()
    return {
      labels: sortedKeys,
      datasets: [
        {
          label: '再生回数',
          backgroundColor: 'rgba(60, 160, 220, 0.3)',
          borderColor: 'rgba(60, 160, 220, 0.8)',
          data: sortedKeys.map(key => parseInt(this.video.views[key])),
          fill: false
        }
      ]
    }
  }
}
</script>

<style scoped>
.v-card {
  margin-right: 10px;
  margin-left: 10px;
}
</style>
