<template>
  <v-card
    outlined
    flat
    @click="goDetailPage"
  >
    <v-row no-gutters>
      <v-col
        xs="12"
        sm="3"
        md="2"
        class= "base_size"
      >
        <v-img
          class='image-trim'
          :src="this.thumbnailUrl">
        </v-img>
      </v-col>
      <v-col
        xs="12"
        sm="9"
        md="10"
      >
        <v-list-item two-line>
          <v-list-item-content>
            <h2 class="title">{{ this.title }}</h2>
            <span class="time">
              <v-icon>access_time</v-icon>
              {{ this.publishAt }}
            </span>
            <slot name="option"></slot>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ListItem extends Vue {
  @Prop({ default: '' })
  id!: String;

  @Prop({ default: '' })
  title!: String;

  @Prop({ default: '' })
  publishAt!: String;

  @Prop({ default: '' })
  thumbnailUrl!: String;

  goDetailPage (): void {
    this.$emit('child-event', String(this.id))
  }
}
</script>
<style scoped>
.title {
  font-size: 0.9rem;
  font-weight: 450;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.v-card {
  margin-top: 10px;
}

.time {
  padding-bottom: 3px;
}

@media screen and (min-width: 601px) {
  .image-trim {
    width: 100%;
    height: 100%;
    max-height: 300px;
    -o-object-fit: cover;
    object-fit: cover;
  }
}

@media screen and (max-width: 600px) {
  .base_size {
    min-width: 100%;
  }

  .image-trim {
    max-height: 300px;
    min-width: 100%;
  }
}
</style>
