<template>
  <div id="Top">
    <h2>ゲーム実況</h2>
    <br>
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="video in top[0].videos"
          :key="video.id"
          md="3"
          sm="6"
          xs="12"
        >
          <v-card rounded @click="goPlayPage(video)">
            <v-img :aspect-ratio="16/9" :src="video.thumbnail_url"><span :class="kindColor(video.site_kbn)">{{ siteName(video.site_kbn) }}</span><br></v-img>
            <p>
              {{video.title}}<br>
              <v-avatar size="26">
                <v-img :src="video.commentator_thumbnail_url"></v-img>
              </v-avatar>
              {{video.commentator_name}}<br>
              再生回数: {{video.view_count}}
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <br>
    <h2>勢いのあるスレTOP30</h2>
    <br>
    <v-card
      class="mx-auto"
      rounded
    >
      <v-list three-line>
        <v-list-item-group color="primary">
        <div v-for="item in top[1].sc_threads" :key="item.id">
          <ThreadItem :item="item">
          </ThreadItem>
        </div>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from 'vue-property-decorator'
import ThreadItem from '../components/ThreadItem.vue'
import { mapState, mapGetters, mapActions } from 'vuex'
import Site from '../common/site'

@Component({
  components: {
    ThreadItem
  }
})
export default class Top extends Mixins(Site) {
  /** computed */
  private get top (): any {
    if (this.$store.getters.getTop) {
      return this.$store.getters.getTop
    } else {
      return [{ 'videos': [] }, { 'sc_threads': [] }]
    }
  }

  /** ライフサイクルフック */
  private created () {
    this.$store.dispatch('fetchTop')
  }

  goPlayPage (video): void {
    this.$router.push({ name: 'VideoPlayer', params: { id: video.id } })
  }
}
</script>
<style scoped>
#Top {
  margin: 20px;
}
p {
  /* v-card-textと同等のスタイル */
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: 0.0071428571em;
  /* 改行しない */
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
h2 {
  padding: 0.4em 0.5em;/*文字の上下 左右の余白*/
  color: #f4f4f4;/*文字色*/
  border-left: solid 10px rgba(207, 202, 202, 0.795);/*左線*/
  /*border-bottom: solid 3px rgba(207, 202, 202, 0.795);/*下線*/
}
</style>
