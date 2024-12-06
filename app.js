// Imports
const express = require('express')
const app = express()
const port = 5000

// Static Files
app.use(express.static('public'));
// Specific folder example
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/frameworks', express.static(__dirname + 'public/frameworks'))

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.render('index')
})
app.get('/home', (req, res) => {
    res.render('index')
})
app.get('/team', (req, res) => {
    res.render('team')
})
app.get('/comingsoon', (req, res) => {
    res.render('comingSoon')
 })
app.listen(port, () => console.info(`Browserlink: http://localhost:${port}`))
