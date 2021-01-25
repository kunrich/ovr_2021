var http     = require('http');
var request  = require('request');
var url='https://player.marimo.life/demo/?key=19qk0qWgZpKSoMujx2WfxK-WzG7Q0N-Y&vid=18fjveikp2HO6Kl5w82v1MjX25vSwtx869Pcl8afmYrV0KvSz6-qsaXJpLHusM-fieKcjNewjaaR2OOutcHBhurC3qLDomOxttWa58ir0t3emqOQytm5manmh4Cuwqyuuuzgr6TA5q_Gtb-HmsGExKWRs97G7J_RwZi7t7rRvIKeuoiNr6il1tXVr6TVm-KfyeLImtDbnH2wkXmgrLjQuJ-Z1Li51L-frdOfo8CUoteq';


http.createServer(function (req, res){
	console.log("ok goto get");
	request(url, function (error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log("inget 1");
		var a1=body.substring(body.search("https://player.marimo.life/"),body.search('" scrolling='));
if(a1!=""){
	url=a1;
}
		
request(url, function (error, response, body) {
	console.log("inget 2");
	if (!error && response.statusCode == 200) {
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
console.log("inget 3");
res.write(body);
res.end();
});


}else{console.log("error pass 2");}
});

}else{console.log("error pass1");}
});

}).listen(8080); 


console.log("ok file");







