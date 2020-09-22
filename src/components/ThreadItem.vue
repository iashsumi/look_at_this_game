<template>
  <div @click="goDetail">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title v-html="item.title"></v-list-item-title>
        <v-list-item-subtitle>
          <span>スレ立て: {{item.thread_created_at}} レス数: {{item.res}} 勢い: {{item.momentum}}</span>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider class="mx-4"></v-divider>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ThreadItem extends Vue {
  @Prop()
  public item?: any;

  goDetail (): void {
    this.$router.push({ name: 'Thread', params: { id: this.item.id } })
  }
}
</script>
