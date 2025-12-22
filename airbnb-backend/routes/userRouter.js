//CORE MODULES
const path= require ("path");

//EXTERNAL MODULES
const express = require("express");

//LOCAL MODULES
const rootDir=require("../utils/pathUtil")
const {registerHomes}=require("./hostRouter");

const userRouter=express.Router();
userRouter.get("/",(req,res,next)=>{
    console.log(registerHomes);
    res.sendFile(path.join(rootDir,"views","home.html"));
});

module.exports=userRouter;