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
            <v-list-item-subtitle>公開日：{{ video.published_at }}</v-list-item-subtitle>
            <v-list-item-subtitle>再生数: {{ video.latest_view }}</v-list-item-subtitle>
            <v-list-item-subtitle>実況者: {{ video.channel_name }}</v-list-item-subtitle>
            <v-list-item-subtitle>更新日: {{ video.updated_at }}</v-list-item-subtitle>
            <v-list-item-subtitle>
              <v-chip class="ma-2" :class="siteColor(video.site_id)">{{ siteName(video.site_id) }}</v-chip>
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
            <line-chart :chart-data="datacollection"></line-chart>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import LineChart from '../chart/LineChart'

@Component({
  components: {
    LineChart
  }
})
export default class Video extends Vue {
  sites = { youtube: 'red', niconico: 'default' }
  dialog = false;
  datacollection = {}

  @Prop()
  public video?: any;

  goPlayPage (): void {
    window.open(this.video.link, '_blank')
  }

  siteColor (site: number): string {
    switch (site) {
      case 0:
        return this.sites.youtube
      default:
        return this.sites.niconico
    }
  }

  siteName (site: number): string {
    switch (site) {
      case 0:
        return 'Youtube'
      default:
        return 'NicoNico'
    }
  }

  private mounted () {
    this.datacollection = {
      labels: Object.keys(this.video.views_each_day),
      datasets: [
        {
          backgroundColor: 'rgba(60, 160, 220, 0.3)',
          borderColor: 'rgba(60, 160, 220, 0.8)',
          data: Object.values(this.video.views_each_day),
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
