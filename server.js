
const express = require('express');
const path = require('path');
const app = express();
console.log(__dirname + '/dist');
app.use(express.static(__dirname + '/dist/prototipopartidos'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/prototipopartidos/index.html'));});
app.listen(process.env.PORT || 8080);
