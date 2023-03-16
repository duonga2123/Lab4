var express = require('express');
var app = express();
var hbs = require('express-handlebars');

app.listen(8080);

app.engine(
    '.hbs',
    hbs.engine({
      extname: ".hbs",
      defaultLayout: false,
      layoutsDir: "views/layouts/"
    })
  );

app.use(express.static('css'));


app.set('view engine', '.hbs');

app.get('/', function(req, res){
    res.send('Hello World')
})

app.get('/baitap', function(req, res){
    res.render('bai3');
})