<template>
  <div id="Thread">
    <h2>{{threadTitle}}</h2>
    <br>
    <v-icon>subject</v-icon>
    <span>{{boardName}}</span>
    <v-icon>comment</v-icon>
    <span>{{resCount}}</span>
    <v-icon>trending_up</v-icon>
    <span>{{momentum}}</span>
    <v-icon>update</v-icon>
    <span>{{updatedAt}}</span>
    <v-card
      class="mx-auto"
      rounded
    >
      <v-list three-line>
      <div v-for="item in threads" :key="item.no">
        <v-list-item>
          <v-icon v-if="item.child">reply</v-icon>
          <v-list-item-content>
            <v-list-item-subtitle>
              No: {{item.no}} 日付: {{item.date}} ID: {{item.id}}
            </v-list-item-subtitle>
            <p v-html="item.text"></p>
          </v-list-item-content>
        </v-list-item>
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
  updatedAt: String = ''
  threads: any = []

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
    }
    )
  }
}
</script>
<style scoped>
#Thread {
  margin: 20px;
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
</style>
