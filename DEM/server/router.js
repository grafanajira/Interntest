const express=require('express');
const route=express.Router();
const fs = require('fs');
const bodyparser=require('body-parser');
const { parse } = require('path');





route.get('/api/bodyparts',(req,res)=>{
   
    console.log('The api is calling');
    path='excersie.json'
    fs.readFile('excersie.json', 'utf8', function (err, data) {
       
           if(err) {
            console.log('error', err);
            return


    }
         

    res.send(data);

    let jsonData =parse(data);
    console.log(typeof(data));

           
          //console.log(data);
        
       });



})

module.exports=route