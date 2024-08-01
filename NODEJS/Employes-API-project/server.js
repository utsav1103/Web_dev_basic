const http = require("http");
//mimic (database)
const employes  = [
    {id:1, name:'Utsav'},
    {id:2, name:'Tisaa'},
];
const requestHandler = (req, res) =>{
    const {method, url} = req;
    const parts = url.split("/");
    const id = parts[2];
    //!GET all employes
    if(method === "GET" && url === "/employes"){
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(employes));
    }
    //? GET single employee
    else if(method === "GET" && parts[1] === "employes" && id){
        const employee = employes.find((emp) => emp.id === parseInt(id));
        if(employee) {
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(JSON.stringify(employee));
        }else{
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(JSON.stringify({message: "Employe not found"}));
        }
    }

    //* creating a new user
    else if(method === 'POST' && url === '/employes'){
        let body =''
        //Listen to the event of making post reqest
        req.on('data',(chuk)=>{
            body += chuk;
        });
        //send the response
        req.on('end',()=>{
            const newEmployee = JSON.parse(body)
            employes.push(newEmployee);
            res.writeHead(200,{"Content-Type": "application/json"});
            res.end(JSON.stringify({newEmployee,employes,}));
        })
    }
};

const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);
});