const express = require('express');
const app = express();
const http = require('http');
const { dirname } = require('path');
const {Server} = require("socket.io");
const server = http.createServer(app);
const io= new Server(server, {
    cors:{
        origin: "*",
        methods: ["GET", "POST"]
    }

});
app.use('/CSS', express.static(__dirname + '/CSS'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

io.on('connection', (socket)=>{
    console.log('Un client connecté');
    socket.on('disconnect', ()=>{
        console.log('Client est offline now');
    })
})




server.listen(3000,()=> {
    console.log('Kill your server');
});
