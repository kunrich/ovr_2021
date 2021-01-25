var express = require("express");
var request = require("request/index.js");
var app     = express();
var port    = process.env.PORT || 80;

app.use(express.static('public'));

app.get("/",(req,res)=>{

if(req.query.url){
var str1 = Buffer.from(req.query.url, 'base64').toString('utf-8');

request.get(str1, function (error, response, body) {
res.send(body);
});

}else{
res.send("error");
}

});

app.listen(port);