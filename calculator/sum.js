const sumRequestHandler = (req,res)=>{
    console.log("The sum of Request Handler ")
    const body =[];
    req.on('data',chunk=>{
        body.push(chunk)
    });
    req.on('end',()=>{
        const bodyStr= Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyStr);
        const bodyObj= Object.fromEntries(params);
        const result = Number(bodyObj.first)+Number(bodyObj.second);
            res.setHeader('Content-Type','text/html');
    res.write(`
            <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Myntra</title>
</head>
<body>
    <h1>YOur Sum is ${result}</h1>
</body>
</html>`);
    return res.end();
    });
}

exports.sumRequestHandler=sumRequestHandler;