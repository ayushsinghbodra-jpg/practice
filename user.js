const fs = require('fs');

const userRequestHandler=(req,res)=>{
    console.log(req.url,req.method);

    if (req.url==="/"){
        res.setHeader('Content-type','text/html');
        res.write(`
            <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compile the coding</title>
</head>
<body>
    <h1>Compile the code is completed !!!!!!</h1>
    <h1>enter the details</h1>
    <form action ="/submit-details" method="POST">
    <input type="text" placeholder="Enter your name" name="username"/>
    <label for = "male">Male</label>
    <input type="radio" id="male" name="gender" value="male"/>
    <label for = "female">Female</label>
    <input type="radio" id="female" name="gender" value="female"/>
    <input type="Submit" value="Submit"/>
    </form>
</body>
</html>`);
            return res.end();
    }else if (req.url.toLowerCase() === "/submit-details" && req.method==="POST"){
        const body=[];
        req.on('data',chunk=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=>{
            const fullBody= Buffer.concat(body).toString();
            console.log(fullBody);
            const params = new URLSearchParams(fullBody);
            //const bodyObject ={}
            //for(const [key,val] of params.entries()){
            //  bodyObject[key]=val;
            //} 
            const bodyObject=Object.fromEntries(params);
            console.log(bodyObject);
            fs.writeFile('user.txt',JSON.stringify(bodyObject),error =>{
                console.log('Data written sucessfully');
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
        return;
    }
    res.setHeader('Content-Type','text/html');
    res.write(`
            <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compile the coding</title>
</head>
<body>
    <h1>Compile the code is completed !!!!!!</h1>
    <h1>LIKE SHARE AND SUBSCRIBE :)</h1>
</body>
</html>`);
        return res.end();
};


module.exports=userRequestHandler;