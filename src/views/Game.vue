<template>
  <div id="Game">
    <v-list-item three-line>
        <div>
          <v-list-item-avatar
            tile
            size="230"
            color="grey"
          >
            <v-img src="https://images-na.ssl-images-amazon.com/images/I/61sKugc3qzL._AC_.jpg"></v-img>
          </v-list-item-avatar>
        </div>
        <v-list-item-content>
          <v-list-item-title class="headline">{{ game.title }}</v-list-item-title>
          <span class="overline">実況者
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
             <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
             <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
             <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
             <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
             <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
             <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
             <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
             <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
             <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
             <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
          </span>
          <span class="overline">タグ一覧
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
             <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
             <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
             <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
             <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
             <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
             <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
            <v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip>
          </span>
        </v-list-item-content>
    </v-list-item>
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr><td>ID</td><td>{{ game.id }}</td></tr>
          <tr><td>発売日</td><td>{{ game.released_at }}</td></tr>
          <tr><td>発売元</td><td>{{ game.publisher }}</td></tr>
          <tr><td>機種</td><td><v-chip class="ma-2" :class="kindColor(game.kind)">{{ game.kind }}</v-chip></td></tr>
          <tr><td>ジャンル</td><td><v-chip class="ma-2" :class="genreColor(game.genre)">{{ game.genre }}</v-chip></td></tr>
          <tr><td>概要</td>
            <td>
              Wikipediaより引用<br>
              本作は、戦国時代を舞台に、戦国大名となって日本全国を統一する事を目的としたゲームである。<br>
              ボードゲーム『戦国大名』をベースに、派手な演出や武将画像などの無駄を省き、<br>
              斬新なゲームシステムを加えた戦略的駆け引きに特化した内容により、<br>
              一時期はコーエーの「信長の野望シリーズ」と戦国時代を題材にしたシミュレーションゲームの二大勢力を築いていた。<br>
              初代『天下統一』では、1国に1大名でゲームが開始された。<br>
              そのため、ゲーム開始時点（1551年）で今川家（駿河国）の譜代家臣であるはずの飯尾家（遠江国）が独立しているなど、<br>
              あえて時代考証を無視している部分がある。システムとしては当時ヒットしていた光栄（現コーエー）の『信長の野望・全国版』が、<br>
              国単位でシミュレートを行なっていたのに対し、本作では城及び街道をシミュレートする部分まで踏み込んでいる。<br>
              また、国家経営の部分よりは合戦を楽しむことを旨としてデザインされている[2]。<br>
              1991年に発売された『天下統一II』では、初代の問題点であった1国に1大名制限がなくなり、よりリアルな勢力図となった。<br>
              また外交に従属・臣従システムが導入され、武力でなく外交で統一することもできるようになった。
            </td></tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { mapState, mapGetters, mapActions } from 'vuex'

@Component
export default class Game extends Vue {
  kinds = { sfc: 'primary', default: 'default' }
  genres = { rpg: 'primary', default: 'default' }

  /** computed */
  private get game (): any {
    return this.$store.getters.getGame
  }

  kindColor (kind: string): string {
    switch (kind) {
      case 'SFC':
        return this.kinds.sfc
      default:
        return this.kinds.default
    }
  }

  genreColor (genre: string): string {
    switch (genre) {
      case 'RPG':
        return this.genres.rpg
      default:
        return this.genres.default
    }
  }

  /** ライフサイクルフック */
  private created () {
    this.$store.dispatch('fetchGame')
      .catch(err => Promise.reject(err))
      .then(() => {
        console.log('OK')
      })
  }
}
</script>
