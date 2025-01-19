'use strict';
const students = [
    {
      "id": 1,
      "firstName": "Ella",
      "lastName": "Fitzgerald"
    },
    {
      "id": 2,
      "firstName": "Nina",
      "lastName": "Simone"
    },
    {
      "id": 3,
      "firstName": "Diana",
      "lastName": "Duff"
    },
    {
      "id": 4,
      "firstName": "Prescott",
      "lastName": "Delmslie"
    }
]


const http = require('http');
// const server = http.createServer((request, response) => {
//     response.write("Hello world from Node.js");
//     console.log(request);
//     response.end();
//   });




const requestHandler = (req, res) =>{
    if(req.url === "/api"){
        const data = students;
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify({data}));
        res.end();
    }else{
        res.statusCode = 404; //为什么这句没生效
        res.write("no data,invalid route");
        res.end();
    }
}

const server = http.createServer(requestHandler);

server.listen(4000, err=>{
    if (err){
        console.error('sth went wrong',err);
    } else{
        console.log('sever runnging on port 4000',err);
    }
});