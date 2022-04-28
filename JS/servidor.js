var http =require ('http');
var fs =require ('fs');
var path =require ('path');

http.createServer(function (request, response){
    console.log('request',request.url);
    
    var filepath = '.'+request.url;
    if(filepath == './'){
        filepath = './index.html';
    }
})