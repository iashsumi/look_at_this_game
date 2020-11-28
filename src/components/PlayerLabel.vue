<template>
  <span>
    <v-avatar size="26">
      <v-img :src="this.thumbnailUrl"></v-img>
    </v-avatar>
    {{this.name}}
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class PlayerLabel extends Vue {
  @Prop({ default: '' })
  thumbnailUrl!: String;

  @Prop({ default: '' })
  name!: String;
}
</script>
