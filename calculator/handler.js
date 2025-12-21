const requestHandler = (req, res) => {
  console.log(req.url, req.method);

//ROUTE  1 TO HOMEPAGE !!!

  if (req.url === "/") {
    res.setHeader('Content-Type','text/html');
    res.write(`
            <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Myntra</title>
</head>
<body>
    <h1>welcome to calculator !!!!!!!!</h1>
    <a href = "./calculator">Go to the calculator :)</a>
</body>
</html>`);
    return res.end();
}

//route 2 to the calculator !!!

else if(req.url.toLowerCase()==="/calculator"){
     res.setHeader('Content-Type','text/html');
    res.write(`
            <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Myntra</title>
</head>
<body>
    <h1>Here is the calculator ***</h1>
    <form action ="/calculate-result" method="POST">
    <input type="text" placeholder="First num" name="first"/>
    <input type="text" placeholder="Second num" name="second"/>
    <input type="Submit" value="Sum"/>
</body>
</html>`);
   return res.end();
  }

  //ROUTE 3 TO THE EROR MSG

   res.setHeader('Content-Type','text/html');
    res.write(`
            <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Myntra</title>
</head>
<body>
    <h1>404 Error found :(  </h1>
    <a href = "./">Go to the home page bro  :)</a>
</body>
</html>`);
   return res.end();
  
};
exports.requestHandler = requestHandler;
