var http     = require('http');

http.createServer(function (req, res){

res.write("post 80");
res.end();

}).listen(80); 

http.createServer(function (req, res){

res.write("post 8080");
res.end();

}).listen(8080); 









