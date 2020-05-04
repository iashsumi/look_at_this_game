<template>
  <div id="Videos">
    <v-row no-gutters>
      <v-col
        v-for="video in this.videos"
        :key="video.sort_key"
        cols="12"
        sm="12"
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
import { Component, Vue } from 'vue-property-decorator'
import Video from '../components/Video.vue'
import { mapState, mapGetters, mapActions } from 'vuex'

@Component({
  components: {
    Video
  }
})
export default class Videos extends Vue {
  disp: boolean = false

  // TODO
  // nextPage (): void {
  //   const key = this.$store.getters.getPagingKey
  //   this.$store.dispatch('fetchVideos', key)
  // }

  /** computed */
  private get videos (): any {
    return this.$store.getters.getVideos
  }

  /** ライフサイクルフック */
  private created () {
    this.$store.dispatch('fetchVideos')
  }
}
</script>
