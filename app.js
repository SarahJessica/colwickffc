var express = require('express');

var app = express();

var port = 5000;

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.static('src/views'));


// SERVE
app.listen(port, function(err){
    console.log('server on port: ' + port);
});

//ROUTING
app.get('/', function(req, res){
    res.serve('src/views/index.html');
});

// app.post();
// app.put();
// app.delete();