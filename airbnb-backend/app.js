//CORE MODULE
const path=require ("path");

//external module
const express= require ("express");

//local module
const userRouter= require("./routes/userRouter");
const {hostRouter} = require("./routes/hostRouter");
const { request } = require("http");
const rootDir=require("./utils/pathUtil")

const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
});

app.use(express.urlencoded());
app.use("/user",userRouter);
app.use("/host",hostRouter);
 
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,"views","404.html"));
});

const PORT = 3005;
app.listen(PORT,()=>{
    console.log(`Server is running in the local address http://localhost:${PORT}`);
});