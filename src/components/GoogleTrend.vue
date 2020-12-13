<template>
  <div id="trend"></div>
</template>

<script>
// tsだとtrends.embed.renderExploreWidgetToでエラーになるのでここでは使用しない
export default {
  props: [
    'keyWord',
    'geo',
    'search'
  ],

  mounted: function () {
    const script = document.createElement('script')
    script.src = 'https://ssl.gstatic.com/trends_nrtr/760_RC08/embed_loader.js'
    script.async = true
    document.head.appendChild(script)

    const arr = [
      {
        'keyword': this.keyWord,
        'geo': this.geo,
        'time': this.search
      }
    ]

    script.onload = () => {
      var divElem = document.getElementById('trend')
      trends.embed.renderExploreWidgetTo(divElem, 'TIMESERIES', {
        'comparisonItem': arr,
        'category': 0,
        'property': ''
      },
      {
        'exploreQuery': 'q=[' + this.keyWord + ']&date=all&geo=' + this.geo,
        'guestPath': 'https://trends.google.com:443/trends/embed/'
      })
    }
  }
}
</script>
<style scoped>
</style>
