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
'.png': 'image/png'
//'.gif': 'text/gif',
//'.mp4': 'text/mp4',
};

contentType = mimeTypes [extname] || 'application/octet-stream';
fs.readFile(filepath, function (error,content){
    if(error){
        if(error.code =='ENOENT'){
            fs.readFile('./404.html',function(error, content){
                response.writeHead (200, { 'Content-Type':contentType});
                response.end(content, 'utf-8');
            });
        }
        else{
            response.writeHead(500);
            response.end('Sorry, check with the site admin for error: '+error.code+'..\n');
            response.end();
        }
    }
    else{
        reponse.writeHead(200,{ 'Content-Type':contentType});
        response.end(content,'utf-8');
    }
});
}).listen(3000);
console.log('Server running at http://192.168.50.137:3000/');