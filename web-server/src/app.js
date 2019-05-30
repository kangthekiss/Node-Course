const express = require('express')
const path = require('path')
const exphbs = require( 'express-handlebars');
const app = express()

//setup handlebars engine and views location
app.engine('.hbs', exphbs({defaultLayout: 'layout', extname: '.hbs'}))
app.set('view engine', '.hbs')

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    res.render('index', {
        text: 'Home Page',
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Thailand'
    })
})

app.get('/products', (req, res) => {
    if(!req.query.search) {
        res.send({
            error: 'You must provide a search term.'
        })
    }

    res.send({
        product: []
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        text: 'About Page',
        name: 'Monkey D Luffy.'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        text: 'Help Page'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        text: '404 Page not found.',
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})