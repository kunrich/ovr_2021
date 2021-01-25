var express = require("express");
var app     = express();
var port    = process.env.PORT || 80;
var request = require("request");


app.use(express.static('public'));
app.get("/",(req,res)=>{

if(req.query.url){
var str1 = Buffer.from(req.query.url, 'base64').toString('utf-8');
// res.send(body);

request(str1, function (error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log("ok request 1...");
		var a1=body.substring(body.search("https://player.marimo.life/"),body.search('" scrolling='));
		if(a1!=""){
		
request(a1, function (error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log("ok request 2...");
		var t1='<div id="player"><script>contents';
		var t2=';</script></div>';
		var b1=body.substring(body.search(t1),body.search(t2)).substr(t1.length+2);
		var b2=b1.substring(0,b1.length-2);
		var b3=b2.split("','");
		
request.post({
url: 'https://player.marimo.life/demo/s/'+b3[1]+'/',
body: 'v='+b3[0]+'&r='+b3[2],
headers: {
'Referer': a1,
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}, function(error, response, body){
res.send(body);
});


	}else{res.send("error");}
})	

		}
	}else{res.send("error");}
});

}else{
res.send("error");
}

});

app.listen(port);