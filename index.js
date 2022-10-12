var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var session = require('express-session')

var indexRouter = require('./routes/index')
var aoRouter = require('./routes/ao')

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use(session({
    name: 'Demo Website Bootstrap 5',
    secret: 'I dunt know',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 30 * 86400000
    }
}));

app.use(function (req, res, next) {
    res.locals.session = req.session;

    var error = req.session.error;
    var success = req.session.success;

    delete req.session.error;
    delete req.session.success;

    res.locals.errorMsg = '';
    res.locals.successMsg = '';

    if (error) res.locals.errorMsg = error;
    if (success) res.locals.successMsg = success;

    next();
});

app.use('/', indexRouter)
app.use('/ao', aoRouter)

app.listen(3000, function () {
    console.log('Server is running! :D')
});