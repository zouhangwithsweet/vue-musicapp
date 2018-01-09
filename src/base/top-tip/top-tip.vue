<template>
    <transition name="drop">
        <div class="top-tip" v-show="showFlag">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                showFlag: false
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylessheet/stylus">
    @import "~common/stylus/varrable"
    .top-tip
        position fixed
        top 0
        width 100%
        z-index 500
        background $color-dialog-background
        &.drop-enter-ative, &.drop-leave-active
            transition all .3s
        &.drop-enter, &.drop-leave-to
            transform translate3d(0, 100%, 0)
</style>
