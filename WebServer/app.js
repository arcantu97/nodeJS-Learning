const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-type': 'application/json' });
    let output = {
        id: 001,
        name: 'Angel',
        password: '123456',
        url: req.url
    }
    res.write(JSON.stringify(output));
    res.end();
}).listen(8080);

console.log("Listen 8080");