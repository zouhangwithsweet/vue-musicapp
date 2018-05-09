/*eslint-disable */
var express = require('express')
var axios = require('axios')
const path = require('path')
var app = express()

var apiRoutes = express.Router()

apiRoutes.get('/getDistList', function(req, res){
    var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
    axios.get(url, {
        headers: {
            referer: 'https://c.y.qq.com',
            host: 'c.y.qq.com'
        },
        params: req.query
    }).then((response) => {
        res.json(response.data)
    }).catch((e) =>{
        console.log(e)
    })
})
apiRoutes.get('/lyric', function(req, res){
    var url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'
    axios.get(url, {
        headers: {
            referer: 'https://c.y.qq.com',
            host: 'c.y.qq.com'
        },
        params: req.query
    }).then((response) => {
        var ret = response.data
        if (typeof ret === 'string') {
            var reg = /^\w+\(({[^()]+})\)$/
            var matches = ret.match(reg)
            if (matches) {
                ret = JSON.parse(matches[1])
            }
        }
        res.json(ret)
    }).catch((e) =>{
        console.log(e)
    })
})

app.use('/api', apiRoutes)

app.use(express.static(path.join(__dirname, 'dist')))
const port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)
