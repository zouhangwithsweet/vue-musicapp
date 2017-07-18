<template>
    <div class="singer">
        
    </div>
</template>

<script>
import {getSingerList} from 'api/singer'
import {ERR_OK} from 'api/config'
const HOT_NAME = '热门'
const HOT_SINGER_LEN = 10
export default {
    data() {
        return {
            singers: []
        }
    },
    created() {
        this._getSingerList()
    },
    methods: {
        _getSingerList() {
            getSingerList().then((res) => {
                if (res.code === ERR_OK) {
                    this.singers  = res.data.list
                }
            })
        },
        _normlizeSinger(list) {
            let map = {
                hot: {
                    title: HOT_NAME,
                    items: []
                }
            }

            list.forEach((item, index) => {
                if (index < HOT_SINGER_LEN) {
                    map.hot.items.push({
                        id: item.Fsinger_mid,
                        name: item.Fsinger_name,
                        avatar: `https://y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000` 
                    })
                }
                const key = item.Findex
                if(!map[key]) {
                    map[key] = {
                        title: key,
                        items: []
                    }
                }
            });
        }
    }
}
</script>

<style scoped lang="stylus">
.singer
    position fixed
    top 88px
    bottom 0
    width 100%
</style>
