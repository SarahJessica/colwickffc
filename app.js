var express = require('express');

var app = express();

// MIDDLEWARE
app.use(express.static('public'));
// app.use(express.static('src/views'));
app.set('views', './src/views');

// HANDLEBARS
var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');


// SERVE
var port = 5000;
app.listen(port, function(err){
    console.log('server on port: ' + port);
});

//ROUTING
app.get('/', function(req, res){
    res.render('index');
});


// app.post();
// app.put();
// app.delete();
