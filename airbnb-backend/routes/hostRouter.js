const path = require ("path");

const express = require("express");

const hostRouter=express.Router();
const HomeController=require ("../controller/home")

hostRouter.get("/add-home",HomeController.getAddHome);

hostRouter.post("/add-home",HomeController.postAddedHome);

exports.hostRouter=hostRouter;