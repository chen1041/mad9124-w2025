'use strict';

const cars = require("./cars.js");
const express = require("express");
const app = express();

app.use(express.json());


const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log(`Sever listening on port ${PORT}`));



app.get("/api/cars", (req, res) => res.send({data:cars}));

app.get("/api/cars/:id", (req, res) => {
    const car = cars.find((car)=> car.id === parseInt(req.params.id));
    res.send({data:car});
});


app.post("/api/cars", (req, res) => {
    const { make, model,colour }= req.body;
    const newCar = {
        id: Date.now(),
        make,
        model,
        colour,
    };
    cars.push(newCar);
    res.status(201).send({data: newCar});
});


app.put("/api/cars/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = cars.findIndex((car)=> car.id === id);
    if(index<0){
        res.status(404).send({
            error:`car with id ${id} not found`,
        });
    }
    const {make,model,colour} = req.body;
    const updatedCar = {id, make, model, colour};
    cars[index]= updatedCar;
    res.send({data:updatedCar});
});

app.patch("/api/cars/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = cars.findIndex((car)=> car.id === id);
    if(index<0){
        res.status(404).send({
            error:`car with id ${id} not found`,
        });
    }
    const {id:_id, ...theRest} = req.body;
    const updatedCar = {
        ...cars[index],
        ...theRest,
    };
    cars[index]= updatedCar;
    res.send({data:updatedCar});
});

app.delete("/api/cars/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = cars.findIndex((car)=>car.id === id);
    if(index<0){
        res.status(404).send({
            error:`car with id ${id} not found`,
        });
    }
    const removedCar = cars.splice([index],1);
    res.send({data:removedCar});
});