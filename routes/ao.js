var express = require('express')
var router = express.Router()

router.get('/', (req, res)=>{
    res.render('site/ao', {title: 'Vintage Shop - Áo'})
})

module.exports = router