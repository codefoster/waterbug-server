var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io").listen(server);
var config = require('./config');
var port = process.env.port || config.devPort;

io.on("connection", function(socket) {
    console.log(`connection (id:${socket.conn.id})`);

    // pass all messages along
    socket.on("message", data => {
        //TODO:store in mongo
        // connection string is config.mongoConnectionString
        // look at the data.message to see what type of message it is and thus what collection it should go in
        
        //send the data to all connected clients
        io.send(data);
    });
});

app.get('/', (req,res) => {
    res.header('200','{"Content-Type","text/html"}');
    res.send("Socket server active and listening...");
    res.end();
});

server.listen(port, function() {
    console.log("Listening on port %s...", server.address().port);
});


