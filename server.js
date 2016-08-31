var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 3000;

//redirect to http from https
app.use(function (req, res, next) {
    if(req.headers['x-forwarded-proto'] === 'https'){
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('public'));

app.get('*', function (req, res) {
   res.sendFile(path.resolve(__dirname + '/public', 'index.html'));
});

app.listen(PORT, function () {
    console.log('Server active. Listening on port ' + PORT + '.');
});