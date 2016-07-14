var express = require('express');

var app = express();

var port = 5000;

app.listen(port, function(err){
    console.log('server on port: ' + port);
});

//ROUTING
app.get('/', function(req, res){

});
app.post();
app.put();
app.delete();
