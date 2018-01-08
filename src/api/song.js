import axios from 'axios'
import { commonParams, options } from './config'
import jsonp from 'common/js/jsonp'
import { getUid } from 'common/js/uid'
const debug = process.env.NODE_ENV !== 'production'

export function getLyric(mid) {
    const url = 'api/lyric'
    const data = Object.assign({}, commonParams, {
        songmid: mid,
        pcachetime: + new Date(),
        platform: 'yqq',
        hostUin: 0,
        needNewCode: 0,
        g_tk: 5381,
        format: 'json'
    })

    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}

export function getVKey(songmid, filename) {
    const url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'
    const data = Object.assign({}, commonParams, {
      cid: 205361747,
      format: 'json',
      platform: 'yqq',
      hostUin: 0,
      needNewCode: 0,
      uin: 0,
      songmid,
      filename,
      guid: getUid()
    })
    return jsonp(url, data, Object.assign({}, options, {
      param: 'callback'
    }))
  }