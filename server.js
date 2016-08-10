// Import dependencies
var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io").listen(server);
var config = require('./config');
var port = process.env.port || config.devPort;

io.on("connection", function (socket) {
    console.log(`new connection (${socket.conn.id})`);
    // pass all messages along
    socket.on("message", data => {
        //send the data to all connected clients
        io.send(data);
    });
});

server.listen(port, function () {
    console.log("Listening on port %s...", server.address().port);
});
