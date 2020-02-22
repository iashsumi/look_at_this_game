<template>
  <div id="Game">
    <v-card>
      <v-row no-gutters>
        <v-col
          xs="12"
          md="3"
        >
          <v-img :src="player.thumbnail"></v-img>
        </v-col>
        <v-col
          xs="12"
          md="9"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline">{{ player.name }}</v-list-item-title>
              <span class="overline">サイト
                <br>
                <v-chip class="ma-2" :class="kindColor(player.site)">{{ siteName(player.site) }}</v-chip>
              </span>
              <span class="overline">公開日
                <p>{{player.published}}</p>
              </span>
              <span class="overline">チャンネル
                <a :href="player.channel_url">チャンネルページはこちら</a>
              </span>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-card>
    <h2>最新の投稿動画</h2>
    <v-row no-gutters>
      <v-col
        v-for="video in player.video"
        :key="video.video_id"
        xs="12"
        md="12"
      >
        <Video
          :video="video"
        />
        <br>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { mapState, mapGetters, mapActions } from 'vuex'
import Video from '../components/Video.vue'

@Component({
  components: {
    Video
  }
})
export default class PlayerDetail extends Vue {
  site = { youtube: 'YouTube', niconico: 'NicoNico' }
  kindColors = { youtube: 'red', niconico: 'default' }

  /** computed */
  private get player (): any {
    return this.$store.getters.getPlayers.find((item: any) => item.id === this.$route.params.id)
  }

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
