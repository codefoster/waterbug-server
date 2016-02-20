var express = require("express");
var path = require("path");
var app = express();
app.state = {
    session:{
        distance:500,
        elapsedTime:0,
        status:'waiting'
    },
    rowers:[
        {id:1,name:'matt'},
        {id:2,name:'larry'}
    ]
}

var server = require("http").Server(app);
var io = require("socket.io").listen(server);
 
// app.use(express.static(path.join(__dirname, "../app")));
// app.use("/scripts", express.static(path.join(__dirname,"../node_modules/")));

io.on("connection", function(socket){
    console.log('client connected');
    socket.on("msg", function(msg){
        console.log('msg from client: ' + msg);
    });
});
 
server.listen(8080, function () {
    console.log("Listening on port %s...", server.address().port);
});

