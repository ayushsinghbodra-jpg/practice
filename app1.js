//Core Module
const http =require('http');
//External Module
const express = require('express');
//Local Module
const requestHandler=require('./user');

const app1= express();

const server = http.createServer (requestHandler);

const PORT=3003; 
server.listen(PORT,() =>{
    console.log(`Server running aat http://localhost:${PORT}`)
});