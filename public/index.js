var socket = io();

socket.on('message', function (data) {
    switch (data.message) {
        case 'startrace':
            addMessage({ message: 'race started', className: 'startrace' });
            break;
        case 'stoprace':
            addMessage({ message: 'race ended', className: 'stoprace' });
            break;
        case 'stroke':
            addMessage({ message: 'Stroke by ' + data.name, className: 'stroke' });
            break;
    }
});

function addMessage(options) {
    var text = document.createTextNode(options.message);
    var el = document.createElement('li');
    var messages = document.getElementById('messages');

    el.appendChild(text);
    if (options.className) el.classList.add(options.className);
    if (options.message == 'race started') messages.innerHTML = "";
    messages.appendChild(el);
    scrollToEnd();
}

function scrollToEnd(){
    window.scrollTo(0, document.body.scrollHeight);
}