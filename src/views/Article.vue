<template>
  <div id="Article">
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
              <h2 :class = calcColor(item.children.length) v-html="item.text"></h2>
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
                <p class='res' v-html="child.text"></p>
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
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
      if (article.exclusion_number) {
        this.exclusionNumber = article.exclusion_number.split(',')
      }
      const pageTitle = ` Look@Game | ${this.title}`
      const pageDescription = ` ${this.gameTitle}(${this.gameTitleMin})${this.keyWord}関連のまとめ`
      let imagePath = ''
      if (article.thumbnail_url && article.thumbnail_url !== 'NoImage') {
        imagePath = ` https://www.latg.site/matome_images/${this.id}/${article.thumbnail_url}`
      } else {
        imagePath = ` https://www.latg.site/default_images/games/${article.game.thumbnail}`
      }
      // 以下SEO対策
      document.title = pageTitle
      const item = document.createElement('meta')
      item.setAttribute('name', 'description')
      item.setAttribute('content', pageDescription)
      document.getElementsByTagName('head')[0].appendChild(item)
      const item2 = document.createElement('meta')
      item2.setAttribute('name', 'og:url')
      item2.setAttribute('content', ` https://www.latg.site/article/${this.id}`)
      document.getElementsByTagName('head')[0].appendChild(item2)
      const item3 = document.createElement('meta')
      item3.setAttribute('name', 'og:type')
      item3.setAttribute('content', 'article')
      document.getElementsByTagName('head')[0].appendChild(item3)
      const item4 = document.createElement('meta')
      item4.setAttribute('name', 'og:title')
      item4.setAttribute('content', pageTitle)
      document.getElementsByTagName('head')[0].appendChild(item4)
      const item5 = document.createElement('meta')
      item5.setAttribute('name', 'og:description')
      item5.setAttribute('content', pageDescription)
      document.getElementsByTagName('head')[0].appendChild(item5)
      const item6 = document.createElement('meta')
      item6.setAttribute('name', 'og:site_name')
      item6.setAttribute('content', 'Look@Game')
      document.getElementsByTagName('head')[0].appendChild(item6)
      const item7 = document.createElement('meta')
      item7.setAttribute('name', 'og:image')
      item7.setAttribute('content', imagePath)
      document.getElementsByTagName('head')[0].appendChild(item7)
      const item8 = document.createElement('meta')
      item8.setAttribute('name', 'twitter:card')
      item8.setAttribute('content', 'summary_large_image')
      document.getElementsByTagName('head')[0].appendChild(item8)
      const item9 = document.createElement('meta')
      item9.setAttribute('name', 'twitter:site')
      item9.setAttribute('content', '@LookGame4')
      document.getElementsByTagName('head')[0].appendChild(item9)
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
</style>
