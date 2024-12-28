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












// Objeto para almacenar los productos del carrito (inicializado desde localStorage si existe)
let carrito = JSON.parse(localStorage.getItem("carrito")) || {};

// Actualizar el contador del carrito en la página principal
function actualizarContadorCarrito() {
    const contador = document.querySelector(".cart-icon span");
    const totalProductos = Object.values(carrito).reduce((total, producto) => total + producto.cantidad, 0);
    contador.textContent = totalProductos;
}

// Agregar un producto al carrito
function addToCart(nombre, precio) {
    if (!carrito[nombre]) {
        carrito[nombre] = { cantidad: 1, precio };
    } else {
        carrito[nombre].cantidad++;
    }

    guardarCarritoEnLocalStorage();
    actualizarContadorCarrito();
    actualizarVista(nombre);
    alert(`${nombre} se agregó al carrito.`);
}

// Modificar la cantidad de un producto en el carrito
function modificarCantidad(nombre, cambio) {
    if (carrito[nombre]) {
        carrito[nombre].cantidad += cambio;
        if (carrito[nombre].cantidad <= 0) {
            delete carrito[nombre];
        }
    }

    guardarCarritoEnLocalStorage();
    actualizarContadorCarrito();
    actualizarVista(nombre);
}

// Eliminar un producto del carrito
function eliminarProducto(nombre) {
    delete carrito[nombre];

    guardarCarritoEnLocalStorage();
    actualizarContadorCarrito();
    actualizarVista(nombre);
}

// Actualizar la vista dinámica en la página principal
function actualizarVista(nombre) {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        const title = card.querySelector("h4").textContent.trim();
        const agregarBtn = card.querySelector(".agregarAlCarrito");
        const controls = card.querySelector(".cantidad-controls");
        const cantidadSpan = card.querySelector(".cantidad");

        if (title === nombre) {
            if (carrito[nombre]) {
                agregarBtn.style.display = "none";
                controls.style.display = "flex";
                cantidadSpan.textContent = carrito[nombre].cantidad;
            } else {
                agregarBtn.style.display = "block";
                controls.style.display = "none";
            }
        }
    });
}


// Guardar el carrito en el almacenamiento local
function guardarCarritoEnLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Inicializar la página principal
document.addEventListener("DOMContentLoaded", () => {
    actualizarContadorCarrito();

    // Si hay productos en el carrito, actualizar la vista de cada uno
    for (const nombre in carrito) {
        actualizarVista(nombre);
    }
});

//localStorage.clear()
