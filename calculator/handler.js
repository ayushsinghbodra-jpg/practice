const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
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
    res.end();
  }
};
exports.requestHandler = requestHandler;
