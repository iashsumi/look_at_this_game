<template>
  <div id="Top">
    <!-- <Tweet :target="this.a"></Tweet>
    <Trend keyWord="プリコネ" geo="JP" search="2018-01-01 2020-10-30"></Trend> -->
    <h2 align="center">Weekly Game Ranking</h2>
    <h3 align="center">対象期間 {{this.from}} ~ {{this.to}}</h3>
    <v-col
      v-for="(data, index) in this.ranking"
        :key="data.game.id"
        cols="12"
        sm="12"
    >
        <b>{{index + 1}} 位</b>
        <ListItem
          :id="data.game.id"
          :title="data.game.title"
          :publishAt="date(data.game.release_date_at)"
          :thumbnailUrl="fetchImage(data)"
          @child-event="goDetailPage($event)"
        >
          <template v-slot:option>
            <div>
              スレの数: {{data.count}}
            </div>
          </template>
        </ListItem>
    </v-col>
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
          v-for="item in this.articles"
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
import ListItem from '../components/ListItem.vue'
import { mapState, mapGetters, mapActions } from 'vuex'
import Site from '../common/site'

@Component({
  components: {
    ThreadItem,
    PlayerLabel,
    ListItem
  }
})
export default class Top extends Mixins(Site) {
  from: string = ''
  to: string = ''
  ranking: Array<any> = []
  articles: any = []
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
    this.$store.dispatch('fetchArticles').then((res) => {
      this.articles = res.articles.slice(0, 16)
    })
    this.$store.dispatch('fetchRanking').then(() => {
      const res = this.$store.getters.getRanking.weekly_summary
      this.from = res.from
      this.to = res.to
      this.ranking = res.data.slice(0, 10)
    })
  }

  private mounted () {
    document.title = 'Look@Game'
  }

  goDetailPage (event: any): void {
    this.$router.push({ name: 'Game', params: { id: String(event) } })
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

  date (text): string {
    if (text) {
      return text.slice(0, 10)
    } else {
      return ''
    }
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
