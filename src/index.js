const express = require('express')
const morgan = require('morgan');
const path = require('path');
const app = express()
const port = 3000

    //--------------------------------------------//
const handlebars = require('express-handlebars');

app.engine('hbs',handlebars.engine({ extname: '.hbs' }));
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'resources/views'));
// (__dirname): E:\Nodejs\blog2\src
// console.log('PATH: ', path.join(__dirname, 'resources/views')) //xem đường dẫn

    //HTTP logger
// app.use(morgan('combined'));


    // Static file
app.use(express.static(path.join(__dirname, 'public')));

    //render file home.hbs
app.get('/', (req, res) => {
    res.render('home');
});

    //render file new.hbs
app.get('/news', (req, res) => {
  res.render('news');
  console.log(req.query.q);
});
app.post('/news', (req, res) => {
    res.render('news');
});

    //render file new.hbs
app.get('/search', (req, res) => {
  res.render('search');
});
app.post('/search', (req, res) => {
    res.render('search');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

