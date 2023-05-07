const express=require('express');
const connectDB=require('./server/database/connection');
const bodyparser=require('body-parser');
const path = require('path');


const app=express();
connectDB();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use('/', require('./server/router'))




const PORT=8080 

// server starting code
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost${PORT}`)
})