<template>
  <div id="VideoPlayer">
    <br>
    <div v-if="load">
      <div v-if="siteKbn === 'youtube'" id='youtube'>
        <youtube :video-id="contentId" :resize="true" :fitParent="true"/>
      </div>
      <div v-else>
        <NicoNico :contentId="contentId" ></NicoNico>
      </div>
    </div>
    <br>
    <h3>{{ title }}</h3>
    <h4>公開日: {{ publishedAt }}</h4>
    <PlayerLabel
      :thumbnailUrl="cTumbnail"
      :name="cName"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VueYoutube from 'vue-youtube'
import NicoNico from '../components/players/NicoNico.vue'
import PlayerLabel from '../components/PlayerLabel.vue'

Vue.use(VueYoutube)

@Component({
  components: {
    NicoNico,
    PlayerLabel
  }
})
export default class VideoPlayer extends Vue {
  load: boolean = false
  title: String = ''
  publishedAt: String = ''
  cName: String = ''
  cTumbnail: String = ''
  siteKbn: String = ''
  contentId: String = ''
  description: String = ''

  /** ライフサイクルフック */
  private created () {
    const id = this.$route.params.id
    const api1 = this.$store.dispatch('fetchPlayers')
    const api2 = this.$store.dispatch('fetchVideo', id)
    Promise.all([api1, api2]).then(() => {
      const players = this.$store.getters.getPlayers
      const video = this.$store.getters.getVideo
      const player = players.find(i => i.id === video.commentator_id)
      this.title = video.title
      this.publishedAt = video.published_at
      this.cName = player.name
      this.cTumbnail = player.thumbnail_url
      this.siteKbn = player.site_kbn
      this.contentId = video.content_id
      this.description = video.description
      this.load = true
    })
  }
}
</script>
<style scoped>
.description {
  white-space: pre-wrap;
}
@media screen and (min-width: 768px) {
  #VideoPlayer{
    margin: auto;
    max-width: 80%;
  }
  #youtube {
    margin: auto;
    max-width: 80%;
  }
}
</style>
