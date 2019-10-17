const http = require('http'),
    fs = require('fs'),
    path = require('path'),
    port = 3000;

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET, POST" });
    let public = '.' + req.url;
    if (public == './')
        public = './index.html';

    let fileType = path.extname(public);
    let contentType = 'text/html';
    switch (fileType) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    fs.readFile(public, (err, content) => (err) ? res.end(`Erro: ${err.code}`) : (() => { res.writeHead(200, { 'Content-Type': contentType }); res.end(content, 'utf-8'); })());

}).listen(port);
console.log(`Servidor rodando em http://localhost:${port}`)
console.log('Para derrubar o servidor: ctrl + c');

// ?
// const http = require('http')
// const port = 3000

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
// })

// server.listen(port, () => {
//   console.log(`Servidor rodando em http://localhost:${port}`)
//   console.log('Para derrubar o servidor: ctrl + c');
// })