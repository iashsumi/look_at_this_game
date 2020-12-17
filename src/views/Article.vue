<template>
  <div id="Article">
    <Tweet id="1334642830795366400"></Tweet>
    <br>
    <h1 align="left" style="font-size: 1.6rem">{{title}} </h1>
    <br>
    <v-icon>title</v-icon>
    <span>{{gameTitle}}</span>
    <br>
    <v-icon>access_time</v-icon>
    <span>{{createdAt}}</span>
    <br>
    <v-chip
      class="ma-2"
      color="blue"
      label
      text-color="white"
      @click="search(gameTitleMin)"
    >
      <v-icon left>
        mdi-label
      </v-icon>
      {{gameTitleMin}}
    </v-chip>

      <v-chip
      class="ma-2"
      color="blue"
      label
      text-color="white"
      @click="search(keyWord)"
    >
      <v-icon left>
        mdi-label
      </v-icon>
      {{keyWord}}
    </v-chip>
    <br>
    <v-card
      class="mx-auto"
      rounded
    >
      <v-list three-line>
      <div v-for="item in comments" :key="item.no">
        <div v-if="notExcludeData(item.no)">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle>
                No: {{item.no}} 日付: {{item.date}} ID: {{item.id}}
              </v-list-item-subtitle>
              <h2 :class = calcColor(item.children.length) v-html="format(item.text)"></h2>
              <div v-for="image in uniq(item.new_images)" :key="image" class='resizeimage'>
                <img :src="buildUrl(image)">
              </div>
            </v-list-item-content>
          </v-list-item>
          <div v-for="child in item.children" :key="child.no">
            <v-list-item v-if="notExcludeData(child.no)">
              <v-icon>reply</v-icon>
              <v-list-item-content>
                <v-list-item-subtitle>
                  No: {{child.no}} 日付: {{child.date}} ID: {{child.id}}
                </v-list-item-subtitle>
                <p class='res' v-html="format(child.text)"></p>
                <div v-for="image in uniq(child.new_images)" :key="image" class='resizeimage'>
                  <img :src="buildUrl(image)">
                </div>
              </v-list-item-content>
            </v-list-item>
          </div>
        </div>
        <v-divider class="mx-4"></v-divider>
      </div>
      </v-list>
    </v-card>
    <br>
    <h2 align="center">関連記事</h2>
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
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { mapState, mapGetters, mapActions } from 'vuex'

@Component
export default class Article extends Vue {
  id: String = ''
  title: String = ''
  gameTitle: String = ''
  gameTitleMin: String = ''
  keyWord: String = ''
  createdAt: String = ''
  comments: any = []
  exclusionNumber: Array<String> = []
  relations: any = []
  game: any = []

  @Watch('$route')
  onRouteChanged (to: any, from: any) {
    const id = this.$route.params.id
    this.$store.dispatch('fetchArticle', id).then(() => {
      const article = this.$store.getters.getArticle
      this.id = article.id
      this.title = article.title
      this.gameTitle = article.game.title
      this.gameTitleMin = article.game.title_min
      this.keyWord = article.key_word
      this.createdAt = article.created_at
      this.comments = article.res_details
      this.game = article.game
      if (article.exclusion_number) {
        this.exclusionNumber = article.exclusion_number.split(',')
      }
      const pageTitle = ` Look@Game | ${this.title}`
      const pageDescription = ` ${this.gameTitle}(${this.gameTitleMin})${this.keyWord}関連のまとめ`
      // 以下SEO対策
      document.title = pageTitle
      let item = document.querySelector("meta[name='description']")
      if (item) item.setAttribute('content', pageDescription)
      this.$store.dispatch('searchArticles', { keyWord: this.gameTitleMin }).then((res) => {
        this.relations = res.articles.slice(1, 7)
      })
    }
    )
    window.scrollTo(0, 0)
  }

  calcColor (childrenSize: Number): String {
    if (childrenSize > 2 && childrenSize <= 4) {
      return 'blue--text font-medium'
    } else if (childrenSize > 4 && childrenSize <= 6) {
      return 'green--text font-big'
    } else if (childrenSize > 6) {
      return 'red--text font-super-big'
    } else {
      return 'font-small'
    }
  }

  uniq (images: Array<string>): Array<string> {
    return Array.from(new Set(images))
  }

  buildUrl (image: string): string {
    if (image === 'NoImage') {
      return '/img/no_image_yoko.jpg'
    }
    return ` https://www.latg.site/matome_images/${this.id}/${image}`
  }

  notExcludeData (no: Number): Boolean {
    return !this.exclusionNumber.includes(String(no))
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
    return ` https://www.latg.site/default_images/games/${this.game.thumbnail}`
  }

  format (text): string {
    const text1 = text.replace('(deleted an unsolicited ad)', '')
    const text2 = text1.replace(/<a ("[^"]*"|'[^']*'|[^'">])*>/g, '<span style="color:#029FDD; font-weight: 900;">')
    const text3 = text2.replace(/<\/a>/g, '</span>')
    const text4 = text3.replace(/<br> <br> /, '')
    return text4
  }

  search (text: string) {
    this.$store.dispatch('initSearchResult')
    this.$router.push({ name: 'ArticleSearch', params: { word: text } })
  }

  /** ライフサイクルフック */
  private created () {
    const id = this.$route.params.id
    this.$store.dispatch('fetchArticle', id).then(() => {
      const article = this.$store.getters.getArticle
      this.id = article.id
      this.title = article.title
      this.gameTitle = article.game.title
      this.gameTitleMin = article.game.title_min
      this.keyWord = article.key_word
      this.createdAt = article.created_at
      this.comments = article.res_details
      this.game = article.game
      if (article.exclusion_number) {
        this.exclusionNumber = article.exclusion_number.split(',')
      }
      const pageTitle = ` Look@Game | ${this.title}`
      const pageDescription = ` ${this.gameTitle}(${this.gameTitleMin})${this.keyWord}関連のまとめ`
      // 以下SEO対策
      document.title = pageTitle
      let item = document.querySelector("meta[name='description']")
      if (item) item.setAttribute('content', pageDescription)
      this.$store.dispatch('searchArticles', { keyWord: this.gameTitleMin }).then((res) => {
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
  font-size: 1.1rem
}

.font-big {
  font-size: 1.2rem
}

.font-super-big {
  font-size: 1.3rem
}

@media screen and (min-width: 768px) {
  #Article{
    margin: auto;
    max-width: 60%;
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
