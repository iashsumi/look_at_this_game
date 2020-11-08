<template>
  <div id="Threads">
    <v-card
      class="mx-auto"
      rounded
    >
      <v-list three-line>
        <v-list-item-group color="primary">
        <div v-for="item in threads" :key="item.id">
          <ThreadItem :item="item">
          </ThreadItem>
        </div>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ThreadItem from '../components/ThreadItem.vue'
import { mapState, mapGetters, mapActions } from 'vuex'

@Component({
  components: {
    ThreadItem
  }
})
export default class Threads extends Vue {
  /** computed */
  private get threads (): any {
    return this.$store.getters.getThreads
  }

  /** ライフサイクルフック */
  private created () {
    const type = this.$route.params.type
    this.$store.dispatch('fetchThreads', type)
  }
}
</script>
<style scoped>
#Threads {
  margin: 20px;
}
h2 {
  padding: 0.4em 0.5em;/*文字の上下 左右の余白*/
  color: #f4f4f4;/*文字色*/
  border-left: solid 10px rgba(207, 202, 202, 0.795);/*左線*/
}

@media screen and (min-width: 768px) {
  #Threads{
    margin: auto;
    max-width: 60%;
  }
}
</style>
