
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class site extends Vue {
  siteNames = { youtube: 'YouTube', niconico: 'ニコニコ動画' }
  kindColors = { youtube: 'red', niconico: 'black' }

  kindColor (site: string): string {
    switch (site) {
      case 'youtube':
        return this.kindColors.youtube
      default:
        return this.kindColors.niconico
    }
  }

  siteName (site: string): string {
    switch (site) {
      case 'youtube':
        return this.siteNames.youtube
      default:
        return this.siteNames.niconico
    }
  }
}
