console.log('setting up socket.io...');

//TODO: see if this connect string works with just var socket = io() as I suspect it will
var socket = io.connect('waterbugsite.azurewebsites.net');

socket.on('update', function (data) {
	console.log(data);
	//TODO:update the UI based on the incoming data
	
	document.getElementById('messages').innerHTML += JSON.stringify(data) + '<br/>';
})