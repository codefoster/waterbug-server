var express = require("express");
var path = require("path");
var app = express();
 
var server = require("http").Server(app);
var io = require("socket.io").listen(server);
 
app.use(express.static(path.join(__dirname, "../client")));
app.use("/scripts", express.static(path.join(__dirname,"../node_modules/")));

io.on("connection", function(socket){
    socket.on("chat_message", function(msg){
        io.emit("chat_message", msg);
    });
});
 
server.listen(8080, function () {
    console.log("Listening on port %s...", server.address().port);
});

