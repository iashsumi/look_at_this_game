<template>
  <div id="Articles">
    <v-row no-gutters>
      <v-col
        v-for="article in this.articles"
        :key="article.id"
        cols="12"
        sm="12"
      >
      <ListItem
        :id="article.id"
        :title="article.title"
        :publishAt="article.created_at"
        :thumbnailUrl="buildImageUrl(article)"
        @child-event="goDetailPage($event)"
      >
        <template v-slot:option>
          <span>
            <span><v-icon>title</v-icon>{{article.game.title}}</span>
            <a :href="goDetailUrl(article)"/>
          </span>
        </template>
      </ListItem>
      </v-col>
      <v-col cols="12" sm="12">
        <v-btn v-if="disp" @click="nextPage">さらに読み込む</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ListItem from '../components/ListItem.vue'
import { mapState, mapGetters, mapActions } from 'vuex'

@Component({
  components: {
    ListItem
  }
})
export default class ArticleSearchResult extends Vue {
  disp: boolean = false
  word: string = ''

  nextPage (): void {
    const key = this.$store.getters.getPagingKey.current_page
    this.$store.dispatch('searchArticles', { key: key + 1, keyWord: this.word })
  }

  goDetailPage (event: any): void {
    this.$router.push({ name: 'Article', params: { id: String(event) } })
  }

  buildImageUrl (item: any): string {
    if (item.thumbnail_url && item.thumbnail_url !== 'NoImage') {
      return ` https://www.latg.site/matome_images/${item.id}/${item.thumbnail_url}`
    }
    return ` https://www.latg.site/default_images/games/${item.game.thumbnail}`
  }

  // SEO対策としてaタグを埋め込む
  goDetailUrl (item): String {
    return ` https://www.latg.site/article/${item.id}`
  }

  /** computed */
  private get articles (): any {
    return this.$store.getters.getArticleSearchResult
  }

  /** ライフサイクルフック */
  private created () {
    this.word = this.$route.params.word
    if (this.$store.getters.getArticleSearchResult && this.$store.getters.getArticleSearchResult.length !== 0) {
      this.disp = true
      return
    }
    this.$store.dispatch('searchArticles', { keyWord: this.word }).then(() => {
      this.disp = true
    })
  }

  private mounted () {
    document.title = 'Look@Game | 検索結果一覧'
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

.image-trim {
  width: 100%;
  height: 100%;
  max-height: 300px;
  -o-object-fit: cover;
  object-fit: cover;
}

.title {
  font-size: 0.9rem;
  font-weight: 450;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

@media screen and (min-width: 768px) {
  #Articles{
    margin: auto;
    max-width: 60%;
  }
}
</style>
