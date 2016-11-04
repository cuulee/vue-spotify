<script>
import {mapState} from 'vuex'

export default {
  name: 'search-result',
  computed: mapState([
    'activeSearchType'
  ]),
  props: [
    'result'
  ],
  methods: {
    renderArtist (h) {
      const genresMaxIndex = this.result.genres.length - 1
      const imageSrc = this.result.images.length > 0
        ? this.result.images.slice(-1)[0].url
        : null
      return (
        <div>
          {imageSrc ? <img src={imageSrc} /> : null}
          <a class='result-name'>{this.result.name}</a>
          <div class='genres'>
            {this.result.genres.map((item, index) => {
                return (
                  index <= 2
                  ? index === genresMaxIndex || index === 2
                    ? index < genresMaxIndex
                      ? <small>{item}...</small>
                      : <small>{item}</small>
                    : <small>{item}, </small>
                  : null
                )
            })}
          </div>
        </div>
      )
    },
    renderAlbum (h) {
      const imageSrc = this.result.images.length > 0
        ? this.result.images.slice(-1)[0].url
        : null
      return (
        <div>
          {imageSrc ? <img src={imageSrc} /> : null}
          <a class='result-name'>{this.result.name}</a>
        </div>
      )
    },
    renderTrack(h) {
      const imageSrc = this.result.album.images.length > 0
        ? this.result.album.images.slice(-1)[0].url
        : null
      return (
        <div>
          {imageSrc ? <img src={imageSrc} /> : null}
          <a class='result-name'>{this.result.name}</a>
        </div>
      )
    }
  },
  render (h) {
    let renderResult
    switch (this.activeSearchType) {
      case 'Artist':
        renderResult = this.renderArtist
        break;
      case 'Album':
        renderResult = this.renderAlbum
        break;
      case 'Track':
        renderResult = this.renderTrack
        break;
    }
    return (
      <li class='search-result'>
        {renderResult(h)}
      </li>
    )
  }
}
</script>

<style scoped>
img {
  margin-right: 0.5em;
  max-height: 64px;
  max-width: 64px;
}
.search-result {
  padding: 0.5em 0 0.25em 0;
}
.result-name {
  display: inline-block;
  vertical-align: top;
  width: calc(100% - (64px + 0.5em));
}
.genres {
  display: block;
}
small {
  opacity: 0.5;
}
</style>
