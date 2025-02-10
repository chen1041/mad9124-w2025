'use strict';
const express = require('express');

const userRouter = require('./routers/users');
const { errorHandler } = require('./middleware/errors');

const app = express();

app.use(express.json());

app.use('/api/users',userRouter);


app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT,err=>{
    if(err){
        console.error("sth went wrong");
        return;
    }
    console.log(`Server running at ${PORT}`);
});

