<template>
  <div id="Articles">
    <v-row no-gutters>
      <br>
      <v-col
        v-for="article in this.articles"
        :key="article.id"
        cols="12"
        sm="12"
      >
      <v-card
        outlined
        flat
        @click="goDetailPage(article.id)"
      >
        <v-row no-gutters>
          <v-col
            xs="12"
            sm="3"
            md="2"
          >
            <v-img
              class='image-trim'
              :src="buildUrl(article)">
            </v-img>

          </v-col>
          <v-col
            xs="12"
            sm="9"
            md="10"
          >
            <v-list-item two-line>
              <v-list-item-content>
                <h2 class="title">{{ article.title }}</h2>
                <v-list-item-subtitle>公開日: {{ article.created_at }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-card>
      <br>
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
export default class Articles extends Vue {
  disp: boolean = false

  nextPage (): void {
    const key = this.$store.getters.getPagingKey.current_page
    this.$store.dispatch('fetchArticles', key + 1)
  }

  goDetailPage (itemId: number): void {
    this.$router.push({ name: 'Article', params: { id: ` ${itemId}` } })
  }

  buildUrl (item: any): string {
    if (item.thumbnail_url) {
      return ` https://www.latg.site/matome_images/${item.id}/${item.thumbnail_url}`
    }
    return ''
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
