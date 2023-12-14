// var a=7;
// var b=2;
// var c=a+b;





// console.log(c);
var http=require('http');
http.createServer(function(reg,res){


// createServer(function(reg,res){

    res.write("welcome back alien !!!")
    res.end()
}).listen(8080)

