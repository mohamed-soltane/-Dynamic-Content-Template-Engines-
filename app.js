const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

const hostname = 'localhost';
const port = 3000;

app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')

app.use(express.static(path.join(__dirname, 'statics')))

app.get('/', (req, res, next) => {
    res.render('index.ejs')
})
app.post('/', bodyParser.urlencoded({extended: true}), (req, res, next) => {
    res.render('index', {
        name: req.body.name
    })
})


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});