
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class site extends Vue {
  siteNames = { youtube: 'YouTube', niconico: 'ニコニコ動画' }
  kindColors = { youtube: 'red', niconico: 'black' }

  kindColor (site: number): string {
    switch (site) {
      case 0:
        return this.kindColors.youtube
      default:
        return this.kindColors.niconico
    }
  }

  siteName (site: number): string {
    switch (site) {
      case 0:
        return this.siteNames.youtube
      default:
        return this.siteNames.niconico
    }
  }
}
