<template>
  <div id="Top">
    <h2 align="center">video</h2>
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="video in top[0].videos"
          :key="video.id"
          md="3"
          sm="6"
          xs="12"
          class= "base_size"
        >
          <v-card rounded @click="goPlayPage(video)">
            <a :href="goPlayPagelUrl(video)"/>
            <v-img :aspect-ratio="16/9" :src="video.thumbnail_url"><br></v-img>
            <h3 class= 'title'>{{video.title}}</h3>
            <div class='time'>
              <v-icon>access_time</v-icon>
              {{ video.published_at }}
            </div>
              <PlayerLabel
                :thumbnailUrl="video.commentator_thumbnail_url"
                :name="video.commentator_name"
              />
            <span :class="kindColor(video.site_kbn)">{{ siteName(video.site_kbn) }}</span>
          </v-card>
          <br>
        </v-col>
      </v-row>
    </v-container>
    <h2 align="center">matome</h2>
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="item in articles"
          :key="item.id"
          md="3"
          sm="6"
          xs="12"
          class="base_size"
        >
          <v-card rounded @click="goDetail(item)">
            <a :href="goDetailUrl(item)"/>
            <v-img :aspect-ratio="16/9" :src="fetchImage(item)"></v-img>
            <h3 class="title">{{item.title}}</h3>
            <v-icon>access_time</v-icon>
            <span>{{item.created_at}}</span><br>
            <v-icon>title</v-icon>
            <span>{{item.game.title}}</span>
          </v-card>
          <br>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from 'vue-property-decorator'
import ThreadItem from '../components/ThreadItem.vue'
import PlayerLabel from '../components/PlayerLabel.vue'
import { mapState, mapGetters, mapActions } from 'vuex'
import Site from '../common/site'

@Component({
  components: {
    ThreadItem,
    PlayerLabel
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
  private get articles (): any {
    if (this.$store.getters.getArticles) {
      return this.$store.getters.getArticles
    } else {
      return []
    }
  }

  /** ライフサイクルフック */
  private created () {
    this.$store.dispatch('fetchTop')
    this.$store.dispatch('fetchArticles')
  }

  private mounted () {
    document.title = 'Look@Game'
  }

  goPlayPage (video): void {
    this.$router.push({ name: 'VideoPlayer', params: { id: video.id } })
  }

  // SEO対策としてaタグを埋め込む
  goPlayPagelUrl (item): String {
    return ` https://www.latg.site/videoplayer/${item.id}`
  }

  goDetailUrl (item): String {
    return ` https://www.latg.site/article/${item.id}`
  }

  goDetail (item): void {
    this.$router.push({ name: 'Article', params: { id: item.id } })
  }

  fetchImage (item): string {
    if (item.thumbnail_url && item.thumbnail_url !== 'NoImage') {
      return ` https://www.latg.site/matome_images/${item.id}/${item.thumbnail_url}`
    }
    return ` https://www.latg.site/default_images/games/${item.game.thumbnail}`
  }
}
</script>
<style scoped>
#Top {
  margin: 20px;
}
.title {
  font-size: 0.9rem;
  font-weight: 450;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.time {
  padding-bottom: 3px;
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
  min-width: 300;
  /* word-wrap: break-word;
  -webkit-line-clamp: 2; */
}

@media screen and (max-width: 600px) {
  .base_size {
    min-width: 100%;
  }
}
</style>
