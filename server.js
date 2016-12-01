var express = require('express');

// _now we have access to express api
var app = express();

app.use(express.static('public'));

app.listen(3000,function (){
  console.log('listening in port 3000');
});
