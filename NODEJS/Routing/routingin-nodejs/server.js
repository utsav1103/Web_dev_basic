
const http = require("http");
const url = require("url");
// console.log(http);

//* creating 2 routes
//? 2. Define the handler
const requestHandler = (req, res) =>{
    //pass url
    const passUrl = url.parse(req.url, true);
    console.log(req.method);
    //home route
    if(passUrl.pathname === "/" && req.method === "GET"){
        //send response
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('HELLO,TISSA...')
    }
    // about route
    if(passUrl.pathname === "/about" && req.method === "GET"){
        //send response
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('HELLO,TISSA...')
    }
    
};


//* 3. Create the server

const server = http.createServer(requestHandler);

//? 4. Start our server

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`The server is running on http://localhost:${PORT}`);
});