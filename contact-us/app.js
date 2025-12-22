const express= require ('express');

const app = express();

app.use((req,res,next)=>{
    console.log("First dummy middileware");
    next();
});

app.use((req,res,next)=>{
    console.log("Second dummy middileware");
    next();
});

// app.use((req,res,next)=>{
//     console.log("Third dummy middileware");
//     res.send("<h1>THis is to confirm that the coding is done perfectly :)</h1>");
// });

app.get("/",(req,res,next)=>{
     console.log("Handlilng the / for GET ",req.url,req.method);
     res.send("<h1>Welcome to the page dude</h1>");
});

app.get("/contact-us",(req,res,next)=>{
     console.log("Handlilng the /contaact-us for GET ",req.url,req.method);
     res.send(
        `<h1>Please give your details</h1>
        <form action="/contact-us" method="POST">
            <input type = "text" name="name" placeholder="Enter your name :)">
            <input type = "text" name="email" placeholder="Enter your email :)">
            <input type = "Submit">
        </form>`
     );
});
app.post("/contact-us",(req,res,next)=>{
    console.log("Handling the contact POST request in the server" ,req.url,req.method);
    res.send("<h1>We will contact you very soon</h1>");
});

const PORT =3000;

app.listen(PORT,()=>{
    console.log(`Server is running jon the addreess http://localhost:${PORT}`);
});