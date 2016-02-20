var express = require("express");
var path = require("path");
var app = express();
app.state = {
    raceDistance: 500,
    startTime: null,
    rowers: [
        {
            name: 'jeremy',
            strokeRates: [24.5, 24.0, 25.5, 26.0, 25.5],
            caloriesPerMinute: 78,
            distance: 99
        },
        {
            name: 'daniel',
            strokeRates: [24.5, 24.0, 25.5, 26.0, 25.5],
            caloriesPerMinute: 78,
            distance: 300
        }
    ]
}

var server = require("http").Server(app);
var io = require("socket.io").listen(server);
 
// app.use(express.static(path.join(__dirname, "../app")));
// app.use("/scripts", express.static(path.join(__dirname,"../node_modules/")));

io.on("connection", function (socket) {
    console.log('client connected');
    socket.on("msg", function (msg) {
        console.log('msg from client: ' + msg);
    });
});

server.listen(8080, function () {
    console.log("Listening on port %s...", server.address().port);
});

