<template>
  <div id="Thread">
    <br>
    <h3 align="center">{{threadTitle}} まとめ</h3>
    <br>
    <v-icon>subject</v-icon>
    <span>{{boardName}}</span>
    <v-icon>comment</v-icon>
    <span>{{resCount}}</span>
    <v-icon>trending_up</v-icon>
    <span>{{momentum}}</span>
    <v-icon>access_time</v-icon>
    <span>{{threadCreatedAt}}</span>
    <br>
    <br>
    <h4 align="center">キーワード</h4>
    <span v-for="tag in tags" :key="tag.id">
      <v-chip class="ma-2" text-color="white">
        {{ tag.word }}
      </v-chip>
    </span>
    <v-card
      class="mx-auto"
      rounded
    >
      <v-list three-line>
      <div v-for="item in threads" :key="item.no">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>
              No: {{item.no}} 日付: {{item.date}} ID: {{item.id}}
            </v-list-item-subtitle>
            <p v-html="item.text" class='res'></p>
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
              <p v-html="child.text" class='res'></p>
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
export default class Thread extends Vue {
  threadTitle: String = ''
  boardName: String = ''
  resCount: Number = 0
  momentum: Number = 0
  threadCreatedAt: String = ''
  updatedAt: String = ''
  threads: any = []
  tags: any = []

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
    this.$store.dispatch('fetchThread', id).then(() => {
      this.threadTitle = this.$store.getters.getThread.title
      this.boardName = this.$store.getters.getThread.board_name
      this.resCount = this.$store.getters.getThread.res_count
      this.momentum = this.$store.getters.getThread.momentum
      this.updatedAt = this.$store.getters.getThread.updated_at
      this.threads = this.$store.getters.getThread.res_details
      this.threadCreatedAt = this.$store.getters.getThread.thread_created_at
      this.tags = this.$store.getters.getThread.key_words
    }
    )
  }
}
</script>
<style scoped>
#Thread {
  margin-top: 20px;
}
.res {
  pointer-events: none;
}
i {
  margin-right: 10px;
}
span {
  margin-right: 20px;
}
h2 {
  padding: 0.4em 0.5em;/*文字の上下 左右の余白*/
  color: #f4f4f4;/*文字色*/
  border-left: solid 10px rgba(207, 202, 202, 0.795);/*左線*/
  /*border-bottom: solid 3px rgba(207, 202, 202, 0.795);/*下線*/
}

@media screen and (min-width: 768px) {
  #Thread{
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
