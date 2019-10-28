<template>
  <div id="header">
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        app
      >
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>contact_mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
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
    drawer: false
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
    update () {

      // console.log(this.drawer)
      // this.DRAWER_UPDATE() // mutationをコールします
    }
  }

}
</script>
