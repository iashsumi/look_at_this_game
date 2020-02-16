<template>
  <v-card
    outlined
    :elevation="3"
    @click="goDetail"
  >

    <v-row no-gutters>
      <v-col
        xs="12"
        md="3"
      >
        <v-img :src="rss.thumbnail"></v-img>
      </v-col>
      <v-col
        xs="12"
        md="9"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline">{{ rss.title }}</v-list-item-title>
            <v-list-item-subtitle>公開日：{{ rss.published }}</v-list-item-subtitle>
            <v-list-item-subtitle>再生数: {{ rss.views }}</v-list-item-subtitle>
            <v-list-item-subtitle>説明: {{ rss.description }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Rss extends Vue {
  @Prop()
  public rss?: any;

  goDetail (): void {
    window.open(this.rss.link, '_blank')
  }
}
</script>

<style scoped>
.v-card {
  margin-right: 10px;
  margin-left: 10px;
}
</style>
