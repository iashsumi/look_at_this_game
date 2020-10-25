<template>
  <div id="VideoPlayer">
    <div v-if="load && this.video.site_kbn === 'youtube'" class='player'>
      <youtube :video-id="video.content_id" :resize="true" :fitParent="true"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

@Component
export default class VideoPlayer extends Vue {
  video: any = {}
  load: boolean = false

  /** ライフサイクルフック */
  private created () {
    const id = this.$route.params.id
    this.video = this.$store.getters.getVideos.find(i => i.id === id)
    this.load = true
  }

  private mounted () {
    if (this.video.site_kbn === 'youtube') {
      return
    }
    const id = this.video.content_id
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', ` https://embed.nicovideo.jp/watch/${id}/script?w=1080&h=540`)
    let target = document.getElementById('VideoPlayer')
    if (target) {
      target.appendChild(recaptchaScript)
    }
  }
}
</script>
<style scoped>
#VideoPlayer {
  margin: 20px;
}
.player {
  margin-left: auto;
  margin-right: auto;
}
</style>
