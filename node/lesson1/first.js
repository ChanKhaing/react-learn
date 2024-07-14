// console.log("Running with Terminal")

// const fs = require('fs');

// fs.writeFileSync('hello.txt',"hello world ")
// .createServer() is a method provided by the http module in Node.js.
const http = require('http');
const { title } = require('process');


// http.createServer((req, res) => {
//     console.log(req);
// });
const server = http.createServer((req, res) => {
    // console.log(req)
    // console.log(req.headers);
    // console.log(req.url, req.method, req.headers)
    
    // console.log(res);
    res.setHeader('Content-Type', 'text/html');
    res.write('<!DOCTYPE html>')
    // res.write('html lang="en"')
    res.write('<head><title> hello this is test from node </title>' )
    res.write('</head>')
    res.write('<body><div> < h1 > hello lavender < span > nice to meet you </ > </h1 > </div ></body > ')
    res.write('</html>')
    res.end();


});

server.listen(5500)
