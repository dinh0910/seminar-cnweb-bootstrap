var express = require('express')
var router = express.Router()

router.get('/', function(req, res){
    res.render('site/index', {title: 'Trang chủ'})
})

module.exports = router