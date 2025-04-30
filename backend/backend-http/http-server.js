const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    const log = `${Date.now()}: new request from \n`;
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>Hello from HTTP!</h1>');
    }else if(req.url === '/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>Contact Us</h1>');
    }else if(req.url === '/about'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>About Us</h1>');
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end('<h1>404 Not Found</h1>');
    }
})

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
})