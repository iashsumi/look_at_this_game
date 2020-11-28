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
        :thumbnailUrl="buildUrl(article)"
        @child-event="goDetailPage($event)"
      >
        <template v-slot:option>
          <span>
            <span><v-icon>title</v-icon>{{article.game.title}}</span>
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
export default class Articles extends Vue {
  disp: boolean = false

  nextPage (): void {
    const key = this.$store.getters.getPagingKey.current_page
    this.$store.dispatch('fetchArticles', key + 1)
  }

  goDetailPage (event: any): void {
    this.$router.push({ name: 'Article', params: { id: String(event) } })
  }

  buildUrl (item: any): string {
    if (item.thumbnail_url && item.thumbnail_url !== 'NoImage') {
      return ` https://www.latg.site/matome_images/${item.id}/${item.thumbnail_url}`
    }
    return ` https://www.latg.site/default_images/games/${item.game.thumbnail}`
  }

  /** computed */
  private get articles (): any {
    return this.$store.getters.getArticles
  }

  /** ライフサイクルフック */
  private created () {
    this.$store.dispatch('fetchArticles').then(() => {
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
