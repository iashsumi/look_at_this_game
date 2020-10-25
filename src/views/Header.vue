<template>
  <div id="header">
    <v-app-bar
      app
      color="black"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <h2>Look@Game</h2>
        <!-- <v-img src="../../public/img/icons/logo_small.png"></v-img> -->
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        app
        temporary
      >
      <v-treeview
        :items="items"
        :open="open"
        item-key="name"
        activatable
        open-on-click
      >
        <template v-slot:prepend="{ item }">
          <span @click="go(item.path)">
            <v-icon>
              {{ item.icon }}
            </v-icon>
            {{ item.name }}
          </span>
        </template>
      </v-treeview>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { DRAWER_UPDATE } from '@/store/mutation-types'

// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data: () => ({
    drawer: false,
    open: ['public'],
    items: [
      {
        id: 1,
        name: 'Top',
        path: '/',
        icon: 'dashboard'
      },
      {
        id: 2,
        name: 'ゲーム実況者',
        path: '/playerlist',
        icon: 'mic'
      },
      {
        id: 3,
        name: 'ゲーム実況アンテナ',
        path: '/videos',
        icon: 'video_library'
      },
      {
        id: 4,
        name: 'ゲーム情報スレまとめ',
        path: '/threads',
        icon: 'view_headline'
      }
    ]
  }),
  // computed: {
  //   // ゲッターを、スプレッド演算子（object spread operator）を使って computed に組み込む
  //   ...mapGetters([
  //     'drawer'
  //     // ...
  //   ])
  // },

  methods: {
    // ...mapMutations({
    //   DRAWER_UPDATE
    // }),
    go (path) {
      this.$router.push({ path: path })
    },
    update () {

      // console.log(this.drawer)
      // this.DRAWER_UPDATE() // mutationをコールします
    }
  }

}
</script>
<style scoped>
span {
  width: 100%
}
</style>
