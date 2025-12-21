//This acts like an ROUTER

//This will import the particular functoin of sumRequestHandler  of sum file into this
const { sumRequestHandler } = require("./sum");

//This is the most important obj of node js
//req : (Request): Contains info about what the user sent (URL, method, data).
//res :(Response): The object you use to send data back to the user (HTML, headers).
const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  //ROUTE  1 TO HOMEPAGE !!!
  //This will direct you to homepage
  if (req.url === "/") {
    //This will include a meta tag to your response packet and this will tell the browser that i m going to send a html ccode so render it in the web page.
    res.setHeader("Content-Type", "text/html");
    //this will write the html code
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

    //res.end(): Sends the finished response to the client. The browser stops loading and shows the page.
    //return: Critically important! It stops the function immediately. If you don't return, the code will continue running downward and might try to send another response, which causes a crash.
    return res.end();
  }

  //route 2 to the calculator !!!
  else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
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
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    return sumRequestHandler(req, res);
  }

  //ROUTE 3 TO THE EROR MSG

  res.setHeader("Content-Type", "text/html");
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
