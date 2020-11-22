<template>
  <div id="Article">
    <br>
    <h1 align="left" style="font-size: 1.6rem">{{title}} </h1>
    <br>
    <v-icon>access_time</v-icon>
    <span>{{createdAt}}</span>
    <br>
    <v-card
      class="mx-auto"
      rounded
    >
      <v-list three-line>
      <div v-for="item in comments" :key="item.no">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>
              No: {{item.no}} 日付: {{item.date}} ID: {{item.id}}
            </v-list-item-subtitle>
            <h2 :class = calcColor(item.children.length) v-html="item.text"></h2>
            <div v-for="image in item.images" :key="image" class='resizeimage'>
              <img :src="convertFromHttpToHttps(image)"><img>
            </div>
          </v-list-item-content>
        </v-list-item>
        <div v-for="child in item.children" :key="child.no">
          <v-list-item>
            <v-icon>reply</v-icon>
            <v-list-item-content>
              <v-list-item-subtitle>
                No: {{child.no}} 日付: {{child.date}} ID: {{child.id}}
              </v-list-item-subtitle>
              <p class='res' v-html="child.text"></p>
              <div v-for="image in child.images" :key="image" class='resizeimage'>
                <img :src="convertFromHttpToHttps(image)"><img>
              </div>
            </v-list-item-content>
          </v-list-item>
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
  title: String = ''
  createdAt: String = ''
  comments: any = []
  calcColor (childrenSize: Number): String {
    console.log(childrenSize)
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

  convertFromHttpToHttps (imageUrl: String): String {
    if (imageUrl.match(/https/)) {
      return imageUrl
    } else {
      return imageUrl.replace('http', 'https')
    }
  }

  /** ライフサイクルフック */
  private created () {
    const id = this.$route.params.id
    this.$store.dispatch('fetchArticle', id).then(() => {
      this.title = this.$store.getters.getArticle.title
      this.createdAt = this.$store.getters.getArticle.created_at
      this.comments = this.$store.getters.getArticle.res_details
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
}

@media screen and (min-width: 768px) {
  .resizeimage img {
    width: 40%;
    max-width: 40%;
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
