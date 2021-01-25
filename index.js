var express=require("express");
var app=express();
var port=process.env.PORT || 80;

app.use(express.static('public'));

app.get("/",(req,res)=>{

if(req.query.url){
var str1 = Buffer.from(req.query.url, 'base64').toString('utf-8');
res.send(str1);
console.log(str1);
}else{
res.send("none");
}

});

app.listen(port);