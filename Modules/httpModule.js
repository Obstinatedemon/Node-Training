const fs = require('fs');
const http = require('http');
require('dotenv').config();

const port = process.env.PORT || 3000;

const server  = http.createServer((req, res)=>{
    
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)
    if(req.url == '/'){
        res.statusCode = 200;
        res.end('<h1>Welcome to Mirketa</h1> <p> Hi! You are on my Home Page</p>');
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1>About</h1> <p>Location: Noida, India</p>');
    }
    else{
        res.statusCode = 404;
        res.end('<h1> Not Found</h1> <p>Not Found</p>');
    }
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);

});