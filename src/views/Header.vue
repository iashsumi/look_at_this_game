<template>
  <div id="header">
    <v-app-bar
      app
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
        :active.sync="active"
        :items="items"
        item-key="name"
        open-on-click
        activatable
      >
        <template v-slot:prepend="{ item }">
         <v-icon>
            {{ item.icon }}
          </v-icon>
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
    active: [],
    items: [
      {
        id: 1,
        name: 'Top',
        path: '/',
        icon: 'dashboard'
      },
      {
        id: 2,
        name: 'ゲーム実況アンテナ',
        path: '/videos',
        icon: 'video_library'
      },
      {
        id: 3,
        name: 'ゲーム情報まとめ',
        path: '/articles',
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
  watch: {
    active: function (val) {
      // activeは配列だが選択できるのは1つだけなので0で参照
      const target = this.items.find(item => item.name === val[0])
      this.$router.push({ path: target.path })
    }
  }
}
</script>
<style scoped>
span {
  width: 100%
}
</style>
