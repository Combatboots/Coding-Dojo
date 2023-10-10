var requests = 2;
var elementRequests = document.querySelector("#requests");

var connections = 489;
var elementConnections = document.querySelector("#connections");

var username = document.querySelector("#username");

function add(id) {
    connections++;
    elementConnections.innerText = connections;
    requests--;
    elementRequests.innerText = requests;
    var element = document.querySelector(id);
    element.remove();
}

function subtract(id) {
    requests--;
    elementRequests.innerText = requests;
    var element = document.querySelector(id);
    element.remove();
}


function edit() {
    username.innerText = "Ben Parks"
}