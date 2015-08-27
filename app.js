var express = require('express');
var path = require('path');
var app = express();


app.use(express.static(__dirname));

app.get('/',function(req,res){
   res.sendFile(path.resolve('./index.html'));
});
app.get('/*',function(req,res){
    res.sendFile(path.resolve('./index.html'));
});

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('start', 'port', server.address().port);
});