<template>
    <transition name="slide">
        <music-list :title="title" :bg-image="bgImage"></music-list>
    </transition>
</template>

<script>
import musicList from 'components/music-list/music-list'
import {mapGetters} from 'vuex'
export default {
    computed: {
        title() {
            return this.disc.dissname
        },
        bgImage() {
            return this.disc.imgurl
        },
        ...mapGetters([
            'disc'
        ])  
    },
    components: {
        musicList
    }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .slide-enter-active, .slide-leave-active
        transition all .3s

    .slide-enter, .slide-leave-to
        transition transform3d(100%, 0, 0)
</style>

