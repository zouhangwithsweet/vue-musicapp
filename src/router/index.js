import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'
import SingerDetail from 'components/singer-detail/singer-detail'
import disc from 'components/disc/disc'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/recommend'
        },
        {
            path: '/recommend',
            name: 'recommend',
            component: Recommend,
            children: [
                {
                    path: ':id',
                    component: disc
                }
            ]
        },
        {
            path: '/singer',
            name: 'singer',
            component: Singer,
            children: [
                {
                    path: ':id',
                    component: SingerDetail
                }
            ]
        },
        {
            path: '/rank',
            name: 'rank',
            component: Rank
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        }
    ]
})
