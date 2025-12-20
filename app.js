const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
    if (req.url=== '/home'){
        res.write(`<h1>Welcome to the homepage !!!!</h1>`);
        return res.end();
    }else if(req.url === '/men'){
        res.write(`<h1>Welcome to the men's page ;) !!!!</h1>`);
        return res.end();
    }else if(req.url === '/women'){
        res.write(`<h1>Welcome to the women's page ;) !!!!</h1>`);
        return res.end();
    }else if(req.url === '/kids'){
        res.write(`<h1>Welcome to the kids's page ;) !!!!</h1>`);
        return res.end();
    }else if(req.url === '/carts'){
        res.write(`<h1>Welcome to the cartting page ;) !!!!</h1>`);
        return res.end();
    }

  res.write(`
       <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Myntra</title>
</head>
<body>
    <head>
        <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/men">Men</a></li>
                <li><a href="/women">Women</a></li>
                <li><a href="/kids">Kids</a></li>
                <li><a href="/carts">Cart</a></li>
            </ul>
        </nav>
    </head>
</body>
</html> `);
  res.end();
});

server.listen(3001, () => {
  console.log(`Server is running on address https://localhost:3001`);
});
