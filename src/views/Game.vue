<template>
  <div id="Game">
    <v-row no-gutters>
      <v-col
        cols="12"
        xs="12"
        sm="6"
        md="6"
      >
        <v-img :aspect-ratio="16/9" :src="fetchImage()"><br></v-img>
      </v-col>
      <v-col
        cols="12"
        xs="12"
        sm="6"
        md="6"
      >
        <div class="meta">
          <h2 class='title'>タイトル: {{this.title}}</h2>
          <span v-for="data in this.kinds" :key="data.id">
            <div class='kind'>機種: {{data.kind || 'スマホ'}}</div>
            <div class='release'>リリース: {{data.release_date_at.slice(0,10)}}</div>
          </span>
          <div class='publisher' v-if="this.publisher">販売元: {{this.publisher}}</div>
        </div>
      </v-col>
    </v-row>
    <br>
    <b>人気度</b>
    <Trend v-if="this.titleMin" :keyWord="this.titleMin" geo="JP" :search="this.dateRange"></Trend>
    <br>
    <b>公式TL</b>
    <Timeline v-if="this.twitterAccountId" :id="this.twitterAccountId" sourceType="profile" :options="{ tweetLimit: '3' }"/>
    <br>
    <b>関連ツイート</b>
    <div v-for="data in this.tweet" :key="data">
      <Tweet :id="data"></Tweet>
      <br>
    </div>
    <br>
    <b>関連記事</b>
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="item in relations"
          :key="item.id"
          md="6"
          sm="6"
          xs="12"
          class="base_size"
        >
          <v-card rounded @click="goDetail(item)">
            <a :href="goDetailUrl(item)"/>
            <v-img :aspect-ratio="16/9" :src="fetchImage(item)"></v-img>
            <h3 class="title">{{item.title}}</h3>
            <v-icon>access_time</v-icon>
            <span>{{item.created_at}}</span>
          </v-card>
          <br>
        </v-col>
      </v-row>
    </v-container>
    <br>
    <b>タグ一覧</b>
    <br>
    <span v-for="data in this.tags" :key="data">
      <v-chip
        class="ma-2"
        color="blue"
        label
        text-color="white"
        @click="search(data.word)"
      >
        <v-icon left>
          mdi-label
        </v-icon>
          {{data.word}}({{data.count}})
      </v-chip>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { mapState, mapGetters, mapActions } from 'vuex'
import { Tweet, Moment, Timeline } from 'vue-tweet-embed'
import Trend from '../components/GoogleTrend.vue'

@Component({
  components: {
    Tweet,
    Timeline,
    Trend
  }
})
export default class Game extends Vue {
  id: String = ''
  title: String = ''
  titleMin: String = ''
  genre: String = ''
  kinds: Array<any> = []
  thumbnail: String = ''
  publisher: String = ''
  developer: String = ''
  description: String = ''
  tweet: Array<String> = []
  twitterAccountId: String = ''
  videos: Array<String> = []
  tags: Array<any> = []
  dateRange: String = ''
  relations: any = []

  goDetailUrl (item): String {
    return ` https://www.latg.site/article/${item.id}`
  }

  goDetail (item): void {
    this.$router.push({ name: 'Article', params: { id: item.id } })
  }

  fetchImage (): string {
    if (this.thumbnail) {
      return ` https://www.latg.site/default_images/games/${this.thumbnail}`
    }
    return ''
  }

  search (text: string) {
    this.$store.dispatch('initSearchResult')
    this.$router.push({ name: 'ArticleSearch', params: { word: text } })
  }

  /** ライフサイクルフック */
  private created () {
    const id = this.$route.params.id
    const today = new Date()
    const startDate = (today.getFullYear() - 1) + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    const endDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    this.dateRange = `${startDate} ${endDate}`
    this.$store.dispatch('fetchGame', id).then(() => {
      const game = this.$store.getters.getGame
      this.id = game.id
      this.title = game.title
      this.titleMin = game.title_min
      this.genre = game.genre
      this.kinds = game.kinds
      this.description = game.description
      this.thumbnail = game.thumbnail
      this.publisher = game.publisher
      this.developer = game.developer
      if (game.tweet) {
        this.tweet = game.tweet.split(',')
      }
      this.twitterAccountId = game.twitter_account_id
      if (game.videos) {
        this.videos = game.videos.split(',')
      }
      this.tags = game.tags
      const pageTitle = ` Look@Game | ${this.title}`
      const pageDescription = ` ${this.title}の情報`
      // 以下SEO対策
      document.title = pageTitle
      let item = document.querySelector("meta[name='description']")
      if (item) item.setAttribute('content', pageDescription)

      this.$store.dispatch('searchArticles', { keyWord: this.titleMin }).then((res) => {
        this.relations = res.articles.slice(1, 7)
      })
    }
    )
  }
}
</script>
<style scoped>
.res {
  pointer-events: none;
}
.font-small {
  font-size: 1rem
}

.font-medium {
  font-size: 1.2rem
}

.font-big {
  font-size: 1.4rem
}

.font-super-big {
  font-size: 1.6rem
}

@media screen and (min-width: 768px) {
  #Game{
    margin: auto;
    margin-top: 20px;
    max-width: 60%;
  }

  .meta {
    margin-left: 5px;
  }

  .resizeimage img {
    max-width: 50%;
    height: auto;
  }
}
@media screen and (max-width: 767px) {
  .resizeimage img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
}
@media screen and (max-width: 600px) {
  .base_size {
    min-width: 100%;
  }
}
</style>
