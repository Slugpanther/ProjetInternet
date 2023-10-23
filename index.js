const express = require('express');
const app = express();
const http = require('http');
const { dirname } = require('path');
const server = http.createServer(app);
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

const io= new Server(server, {
    cors:{
        origin: "*",
        methods: ["GET", "POST"]
    }

});

server.listen(3000,()=> {
    console.log('Kill your server');
});
