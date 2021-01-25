var express = require('express');
var request = require('request');

var app = express();
app.use(express.json());


app.get('/', (req, res) => {
if(req.query.url){
var str1 = Buffer.from(req.query.url, 'base64').toString('utf-8');
res.send(str1);
console.log(str1);
}else{
 res.send("none");
}
console.log("END");
});


var port = process.env.PORT || 80;
app.listen(port, () => console.log(`Listening on port${port}...`) );