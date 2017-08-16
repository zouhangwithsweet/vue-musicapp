<template>
    <div class="progress-bar" ref="progressBar" @click="progressClick">
        <div class="bar-inner">
            <div class="progress" ref="progress"></div>
            <div class="progress-btn-wrapper" ref="progressBtn"
                @touchstart.prevent="progressTouchStart"
                @touchmove.prevent="progressTouchMove"
                @touchend="progressTouchEnd"
            >
                <div class="progress-btn"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {prefixStyle} from 'common/js/dom'
    const BTNWIDTH = 16
    const transform = prefixStyle('transform')
    export default {
        props: {
            percent: {
                type: Number,
                defalut: 0
            }
        },
        watch: {
            percent: {
                deep: true,
                handler(newVal) {
                    if (newVal >= 0) {
                        const barWidth = this.$refs.progressBar.clientWidth - BTNWIDTH
                        const offsetWidth = newVal * barWidth
                        this.$refs.progress.style.width = `${offsetWidth}px`
                        this.$refs.progressBtn.style[transform] = `translate3d(${offsetWidth}px, 0, 0)`
                    }
                }
            }
        },
        methods: {

        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .progress-bar
    height: 30px
    .bar-inner
      position: relative
      top: 13px
      height: 4px
      background: rgba(0, 0, 0, 0.3)
      .progress
        position: absolute
        height: 100%
        background: $color-theme
      .progress-btn-wrapper
        position: absolute
        left: -8px
        top: -13px
        width: 30px
        height: 30px
        .progress-btn
          position: relative
          top: 7px
          left: 7px
          box-sizing: border-box
          width: 16px
          height: 16px
          border: 3px solid $color-text
          border-radius: 50%
          background: $color-theme
</style>
