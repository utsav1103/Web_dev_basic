
const http = require("http");
const url = require("url");
// console.log(http);

//* creating 2 routes
//? 2. Define the handler
const requestHandler = (req, res) =>{
    //pass url
    const passUrl = url.parse(req.url, true);
    const pathname = passUrl.pathname
    //split the pathname

    const pathComponent = pathname.split('/').filter(Boolean);
    if(pathComponent[0] === 'products' && pathComponent[1] ) {
        //Take the product id and send to the user
        //peroform some db query
        const productId = pathComponent[1];
        //send to the user
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end(`Product ID ${productId}`);
    }else{
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end(`Not Found`);
    }
};


//* 3. Create the server

const server = http.createServer(requestHandler);

//? 4. Start our server

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`The server is running on http://localhost:${PORT}`);
});