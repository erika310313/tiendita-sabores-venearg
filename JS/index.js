function cargarElemento(url, elemento){
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send(null);
    elemento.innerHTML = request.responseText;
}

function cargarRegistroUsuario(){
    cargarElemento("registroUsuario.jsp", document.getElementById("contenidoDinamico"));
}

function cargarLogin(){
    cargarElemento("loginUsuario.jsp", document.getElementById("contenidoDinamico"));
}