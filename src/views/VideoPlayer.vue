<template>
  <div id="VideoPlayer">
    <br>
    <h3>{{ title }}</h3>
    <h4>公開日: {{ publishedAt }}</h4>
    <h4>再生数: {{ viewCount }}</h4>
    <h4>実況者: {{ commentatorName }}</h4>
    <br>
    <div v-if="load && siteKbn === 'youtube'" id='youtube'>
      <youtube :video-id="contentId" :resize="true" :fitParent="true"/>
    </div>
    <div v-else>
      <NicoNico :contentId="contentId" ></NicoNico>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VueYoutube from 'vue-youtube'
import NicoNico from '../components/players/NicoNico.vue'

Vue.use(VueYoutube)

@Component({
  components: {
    NicoNico
  }
})
export default class VideoPlayer extends Vue {
  load: boolean = false
  title: String = ''
  publishedAt: String = ''
  viewCount: Number = 0
  commentatorName: String = ''
  siteKbn: String = ''
  contentId: String = ''

  /** ライフサイクルフック */
  private created () {
    const id = this.$route.params.id
    const video1 = this.$store.getters.getTop[0].videos.find(i => i.id === id)
    const video2 = this.$store.getters.getVideos.find(i => i.id === id)
    const video = video1 || video2
    this.title = video.title
    this.publishedAt = video.published_at
    this.viewCount = video.view_count
    this.commentatorName = video.commentator_name
    this.siteKbn = video.site_kbn
    this.contentId = video.content_id
    this.load = true
  }
}
</script>
<style scoped>
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
