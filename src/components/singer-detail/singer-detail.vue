<template>
    <transition name="slider">
        <div class="singer-detail"></div>
    </transition>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {getSingerData} from 'api/singer'
    import {createSong} from 'common/js/song'
    import {ERR_OK} from 'api/config'
    export default {
        data() {
            return {
                songs: []
            }
        },
        computed: {
            ...mapGetters([
                'singer'
            ])
        },
        created() {
            this._getData()
        },
        methods: {
            _getData() {
                if (!this.singer.id) {
                    this.$router.push('/singer')
                    return
                }
                getSingerData(this.singer.id).then(res => {
                    if (res.code === ERR_OK) {
                        this.songs = this._nomarlizeSongs(res.data.list)
                        console.log(this.songs)
                    }
                })
            },
            _nomarlizeSongs(list) {
                let ret = []
                list.forEach((item) => {
                    let {musicData} = item
                    if (musicData.songid && musicData.albummid) {
                        ret.push(createSong(musicData))
                    }
                });
                return ret
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "~common/stylus/variable"
    .singer-detail
        position fixed
        z-index 100
        top 0
        left 0
        right 0
        bottom 0
        background $color-background
    .slider-enter-active,.slider-leave-active
        transition all .3s
    .slider-enter,.slider-leave-to
        transform translate3d(100%,0,0)
</style>
