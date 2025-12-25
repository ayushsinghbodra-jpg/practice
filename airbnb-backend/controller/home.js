
// //a more straight forward way to export the things
// exports.getHome=(req,res,next)=>{
//     res.sendFile(path.join(rootDir,"views","addHome.html"));
// }
const Home =require("../models/home"); 

const path = require ("path");
const rootDir=require("../utils/pathUtil");

const registerHomes=[];

const getAddHome=(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","host/addHome.html"));
};

const postAddedHome=(req,res,next)=>{
    console.log(req.body);
    const{Housename,Price,Location,Rating,HouseImage}=req.body;
    const home=new Home(Housename,Price,Location,Rating,HouseImage)
    home.save();
    res.sendFile(path.join(rootDir,"views","host/homeAdded.html"));
};

const getHome=(req,res,next)=>{
    Home.fetchAll(registerHomes=>{
         res.render('store/home',{registerHomes:registerHomes,pagetitle:'airbnb Home'});
    });
};
exports.registerHomes=registerHomes;
exports.getHome=getHome;
exports.postAddedHome=postAddedHome;
exports.getAddHome=getAddHome;