<template>
  <v-app>
    <Header/>
    <!-- <Navigation/> -->

    <v-content>
      <p>最近発売されたゲーム</p>
      <v-row no-gutters>
        <v-col
          v-for="n in 12"
          :key="n"
          cols="12"
          sm="4"
        >
          <Card/>
        </v-col>
      </v-row>
      <template v-slot:activator="{ on }">
        <p>あなたにオススメのゲーム</p>
      </template>
      <span>Codepen</span>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
// import Navigation from '@/views/Navigation.vue'
import Header from '@/views/Header.vue'
import Card from '@/components/Card.vue'

export default Vue.extend({
  name: 'App',
  components: {
    // Navigation,
    Header,
    Card
  },
  data: () => ({
    //
  })
})
</script>
