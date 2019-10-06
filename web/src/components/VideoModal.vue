<template>
  <div :class="{modal: true, show: currentResult}" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content" v-if="currentResult">
        <div class="modal-header">
          <p class="modal-title" v-html="title"></p>
          <button type="button" class="close" aria-label="Close" @click="onClose">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="video-responsive">
            <iframe frameborder="0" :src="videoUrl" scrolling="no" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-background" @click="onClose"></div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'VideoModal',
  computed: {
    ...mapState(['currentResult']),
    title: function() {
      const date = this.currentResult.programme.date
      return `<strong>${moment(date).format(
        'DD/MM/YYYY'
      )}</strong> | TD ${date.substring(
        11,
        13
      )}h <small>(${this.$options.filters.formatTime(
        this.currentResult.time_start
      )})</small>`
    },
    videoUrl: function() {
      // XXX: We try embedding from a given time, but it doesn't work, see #27
      const parts = this.currentResult.link.split('/')
      return `https://secure-embed.rtve.es/drmn/embed/video/${
        parts[parts.length - 1]
      }`
    }
  },
  watch: {
    currentResult: function() {
      if (this.currentResult) {
        document.body.classList.add('modal-open')
      } else {
        document.body.classList.remove('modal-open')
      }
    }
  },
  methods: {
    ...mapActions(['setCurrentResult']),
    onClose: function() {
      this.setCurrentResult(null)
    }
  }
}
</script>

<style lang="scss">
.modal.show {
  display: block;
}
.modal-dialog {
  z-index: 2;
}
.modal-body {
  padding: 0;
}
.modal-content {
  border-radius: 0;
}
.modal-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  opacity: 0.5;
  z-index: 1;
  cursor: pointer;
}
.video-responsive {
  position: relative;
  height: 0;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
