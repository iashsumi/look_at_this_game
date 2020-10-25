<template>
  <div id="niconico">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class NicoNico extends Vue {
  @Prop()
  public contentId?: string;

  private mounted () {
    const id = this.contentId
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', ` https://embed.nicovideo.jp/watch/${id}/script?w=1080&h=540`)
    let target = document.getElementById('niconico')
    if (target) {
      target.appendChild(recaptchaScript)
    }
  }
}
</script>

<style scoped>
  @media screen and (min-width: 768px) {
    #niconico {
      margin: auto;
      max-width: 80%;
    }
    iframe {
      margin: auto;
      max-width: 80%;
    }
  }
</style>
