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
      </v-col>
      <v-col cols="12" sm="12">
        <v-btn v-if="disp" @click="nextPage">さらに読み込む</v-btn>
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

  nextPage (): void {
    const key = this.$store.getters.getPagingKey
    this.$store.dispatch('fetchVideos', key)
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
</style>
