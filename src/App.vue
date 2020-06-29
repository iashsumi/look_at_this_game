<template>
  <v-app>
    <Header/>
    <!-- <Navigation/> -->
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
// import Navigation from '@/views/Navigation.vue'
import Header from '@/views/Header.vue'
// import Card from '@/components/Card.vue'

export default Vue.extend({
  name: 'App',
  components: {
    // Navigation,
    Header
    // Card
  },
  data: () => ({
    //
  })
})
</script>
