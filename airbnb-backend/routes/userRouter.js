//CORE MODULES
const path= require ("path");

//EXTERNAL MODULES
const express = require("express");

//LOCAL MODULES
const HomeController=require("../controller/home");

const userRouter=express.Router();
userRouter.get("/",HomeController.getHome);

module.exports=userRouter;
