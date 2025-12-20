const http= require('http');
const { requestHandler }=require ('./handler');

const server = http.createServer(requestHandler);

const PORT=3002;
server.listen(PORT,()=>{
    console.log(`Server is running on the address http://localhost:${PORT}`);
});