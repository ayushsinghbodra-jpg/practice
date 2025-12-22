const path = require ("path");

const express = require("express");

const hostRouter=express.Router();
const rootDir=require("../utils/pathUtil");

hostRouter.get("/add-home",(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","addHome.html"));
});

const registerHomes=[];

hostRouter.post("/add-home",(req,res,next)=>{
    console.log(req.body);
    registerHomes.push({Housename : req.body.Housename})
    res.sendFile(path.join(rootDir,"views","homeAdded.html"));
});

exports.hostRouter=hostRouter;
exports.registerHomes=registerHomes;