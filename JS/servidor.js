var http =require ('http');
var fs =require ('fs');
var path =require ('path');

http.createServer(function (request, response){
    console.log('request',request.url);
    
    var filepath = '.'+request.url;
    if(filepath == './'){
        filepath = './index.html';
    }

//minitipos de datos porque se toman en cuenta
var extname = String(path.extname(filepath)).toLocaleLowerCase();
var contentType = 'text/html';
var mimeTypes = {
'.html': 'text/html',
'.js': 'text/javascript',
'.css': 'text/css',
'.png': 'text/png'
//'.gif': 'text/gif',
//'.mp4': 'text/mp4',
}});