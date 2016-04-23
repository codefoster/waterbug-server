/// <reference path="typings/main/ambient/express/index.d.ts" />

var express = require("express");

var app = express();

var server = require("http").Server(app);
var io = require("socket.io").listen(server);
var port = process.env.port || 8080;

io.on("connection", function(socket) {
    // wire up a handler for the client sending a 'stroke' message
    console.log('connection');
    console.log(socket.conn.id);

    // these are simple pass thru's
    // when any client sends a "stroke" or "startrace" message it will be passed on to all other connected clients
    // inside these handlers is where we would "intercept" all messages to persist data to a database
    socket.on("stroke", data => io.emit("stroke", data));
    socket.on("startrace", data => io.emit("startrace", data));
    socket.on("stoprace", data => io.emit("stoprace", data));
});

app.get('/', (req,res) => {
    res.header('200','{"Content-Type","text/html"}');
    res.send("Socket server active and listening...");
    res.end();
});

server.listen(port, function() {
    console.log("Listening on port %s...", server.address().port);
});