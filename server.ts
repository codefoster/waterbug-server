import express = require('express');
import http = require('http');
import socketio = require('socket.io');
import config from './config';

let app = express();
let server = http.Server(app);
let io = socketio.listen(server);
var port = process.env.port || config.devPort;

io.on("connection", socket => {
    console.log(`new connection (${socket.conn.id})`);
    
    // pass all messages along
    socket.on("message", data => {
        //send the data to all connected clients
        io.send(data);
    });
});

server.listen(port, () => {
    console.log("Listening on port %s...", server.address().port);
});
