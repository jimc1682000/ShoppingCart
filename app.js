var express = require('express');
var serveStatic = require('serve-static');

var app = express();

app.use(serveStatic('app', {'index': ['index.html', 'index.htm']}));
app.use(serveStatic('res'));
app.listen(3000);