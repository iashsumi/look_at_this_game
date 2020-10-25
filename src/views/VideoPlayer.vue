<template>
  <div id="VideoPlayer">
    <h3>{{ this.video.title }}</h3>
    <h4>公開日: {{ this.video.published_at }}</h4>
    <h4>再生数: {{ this.video.view_count }}</h4>
    <h4>実況者: {{ this.video.commentator_name }}</h4>
    <br>
    <div v-if="load && this.video.site_kbn === 'youtube'" id='youtube'>
      <youtube :video-id="video.content_id" :resize="true" :fitParent="true"/>
    </div>
    <div v-else>
      <NicoNico :contentId="video.content_id" ></NicoNico>
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
  video: any = {}
  load: boolean = false

  /** ライフサイクルフック */
  private created () {
    const id = this.$route.params.id
    this.video = this.$store.getters.getVideos.find(i => i.id === id)
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
