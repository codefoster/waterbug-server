/// <reference path="typings/main/ambient/express/index.d.ts" />

var express = require("express");

var app = express();

var server = require("http").Server(app);
var io = require("socket.io").listen(server);
var port = process.env.port || 8080;

io.on("connection", function(socket) {
    console.log(`connection (id:${socket.conn.id})`);

    // pass all messages along
    socket.on("message", data => io.send(data));
});

app.get('/', (req,res) => {
    res.header('200','{"Content-Type","text/html"}');
    res.send("Socket server active and listening...");
    res.end();
});

server.listen(port, function() {
    console.log("Listening on port %s...", server.address().port);
});


