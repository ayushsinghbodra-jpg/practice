// bringing the htttps module in the program
const http= require('http');
//this will send the request to the handler 
const { requestHandler }=require ('./handler');
//a server is created 
const server = http.createServer(requestHandler);
//PORT is used to send the listening part  of the computer 
const PORT=3002;
server.listen(PORT,()=>{
    console.log(`Server is running on the address http://localhost:${PORT}`);
});


//This part is the one that recieves the reqquest from the user and immediately send it to the requesthandler to handle it