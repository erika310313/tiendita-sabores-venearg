const usuarioLogueado = localStorage.getItem('usuarioLogueado');

if (usuarioLogueado) {
   document.getElementById('mensajeBienvenida').textContent = `Hola, ${usuarioLogueado}!`;
} else {
    window.location.href = 'login.html'; // Si no está logueado, redirigir al login
}

// Función de cierre de sesión
document.getElementById('cerrarSesion').addEventListener('click', function() {
    localStorage.removeItem('usuarioLogueado');
    sessionStorage.clear();

    alert('Has cerrado sesión.')
    window.location.href = 'login.html'; // Redirigir al login
});

function resetearFormularioPedido(){
    document.getElementById('form-pedidos').reset();    
}

// Función para validar el formulario de pedido (simplificado)
function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const usuario = document.getElementById('usuario').value;
    const email = document.getElementById('email').value;
    const direccion = document.getElementById('direccion').value;
    const zip = document.getElementById('zip').value;

    if (nombre === '' || apellido === '' || usuario === '' || email === '' || direccion === '' || zip === '') {
        alert('Por favor, completa todos los campos.');
        return false;
    }

    // Simulación de envío de datos
    alert('¡Pedido realizado correctamente! Nos pondremos en contacto pronto.');
    return true;
}

// Event listener para el botón de cerrar sesión
document.getElementById('cerrarSesion').addEventListener('click', function() {
    cerrarSesion();
});