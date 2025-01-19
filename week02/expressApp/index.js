"use strict";

const express = require("express");
const app = express();

// app.get("/",(request,response)=>{
//     response.send("hello from express");
//     response.code = 201; //test
// });

app.get("/api",(request,response)=>{
        response.status(201).send({
            data:{
                message:"hello from express!",
            },
        });
        
    })

const PORT =4000;
app.listen(PORT,(err)=>{
    if (err) return console.error("An error occurred", err);
    console.log(`The server is listening on ${PORT}`);
})

// const cars = [
//     { id: 1, make: "Tesla", model: "S", colour: "Black" },
//     { id: 2, make: "Tesla", model: "3", colour: "Red" },
//     { id: 3, make: "Tesla", model: "X", colour: "Silver" },
//     { id: 4, make: "Tesla", model: "Y", colour: "Chestnut Brown" },
// ];
const cars = require("./cars.js");

app.get("/api/cars",(request,response)=>{
    response.send({data:cars})
});