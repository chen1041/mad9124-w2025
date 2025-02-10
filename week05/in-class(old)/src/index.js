'use strict';
const express = require('express');
const morgan = require('morgan');
const studentRouter = require('./routers/students');

const app = express();

app.use(express.json());
app.use(morgan('tiny'));

//告诉 Express，当路由以 /api/students 开头时，应该使用 studentRouter 来处理这些请求。
app.use('/api/students',studentRouter);




const PORT = process.env.PORT || 4000;
app.listen(PORT,err=>{
    if(err){
        console.error("sth went wrong");
        return;
    }
    console.log(`Server running at ${PORT}`);
});

