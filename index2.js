//llamamos el modulo http
const http = require ('http');
//establecemos la url o ip de nuestro servidor
const hostname= '192.168.50.158';
//establecemos el puerto de eescucha
const port =3000;
//creamos una sinstancia http con un reques y un response
const server = http.createServer ((req, res) => {
//el servidor respodnera con un codigo 200
res.statusCode =200;
//el servidor respondera con un texto plano
//res.statusHeader ('Content-Type','text/plain');
res.statusHeader ('Content-Type','text/html');
//el servidor respodnera el mensaje hola mundo
//res.end('Hola mundo \n');
res.end('<h1>Hola Mundo </h1>');
});
server.listen(port, hostname, ()=>{
    console.log(`El servidor se esta ejecutando en http://${hostname}:${port}/`);
//sss
});
