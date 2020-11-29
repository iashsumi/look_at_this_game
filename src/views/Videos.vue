<template>
  <div id="Videos">
    <v-row no-gutters>
      <v-col
        v-for="video in this.videos"
        :key="video.id"
        cols="12"
        sm="12"
      >
        <ListItem
          :id="video.id"
          :title="video.title"
          :publishAt="video.published_at"
          :thumbnailUrl="video.thumbnail_url"
          @child-event="goDetailPage($event)"
        >
          <template v-slot:option>
            <PlayerLabel
              :thumbnailUrl="video.commentator_thumbnail_url"
              :name="video.commentator_name"
            />
            <span :class="kindColor(video.site_kbn)" class= "kind-format">{{ siteName(video.site_kbn) }}</span>
            <a :href="goPlayPagelUrl(video)"/>
          </template>
        </ListItem>
      </v-col>
      <v-col cols="12" sm="12">
        <v-btn v-if="disp" @click="nextPage">さらに読み込む</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from 'vue-property-decorator'
import ListItem from '../components/ListItem.vue'
import PlayerLabel from '../components/PlayerLabel.vue'
import Site from '../common/site'
import { mapState, mapGetters, mapActions } from 'vuex'

@Component({
  components: {
    ListItem,
    PlayerLabel
  }
})
export default class Videos extends Mixins(Site) {
  disp: boolean = false

  nextPage (): void {
    const key = this.$store.getters.getPagingKey.current_page
    this.$store.dispatch('fetchVideos', key + 1)
  }

  goDetailPage (event: any): void {
    this.$router.push({ name: 'VideoPlayer', params: { id: String(event) } })
  }

  // SEO対策としてaタグを埋め込む
  goPlayPagelUrl (item): String {
    return ` https://www.latg.site/videoplayer/${item.id}`
  }

  /** computed */
  private get videos (): any {
    return this.$store.getters.getVideos
  }

  /** ライフサイクルフック */
  private created () {
    this.$store.dispatch('fetchVideos').then(() => {
      this.disp = true
    })
  }
}
</script>
<style scoped>
.v-btn {
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  text-align: center;
  width: 100%;
}

.kind-format {
  margin-top: 3px;
  max-width: 120px;
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

@media screen and (min-width: 768px) {
  #Videos{
    margin: auto;
    max-width: 60%;
  }
}
</style>
