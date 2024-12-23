function validarLogin(event) {
    event.preventDefault(); 

    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    // Validación simple
    if (usuario === '' || password === '') {
        alert('Por favor, completa todos los campos.');
        return false;
    }
    
    // Recuperar los usuarios registrados del localStorage
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    // Buscar al usuario en la lista de usuarios registrados
    const usuarioEncontrado = usuariosGuardados.find(user => user.usuario === usuario && user.password === password);
    
    if (usuarioEncontrado) {
        // Guardar el estado del usuario logueado
        localStorage.setItem('usuarioLogueado', usuario);
        window.location.href = 'paginaInicio.html'; // Redirigir a la página de bienvenida
    } else {
        alert('Usuario o contraseña incorrectos');
    }

    return false;
}


function borrarDatosEspecificos(){
    var txtUsuario = document.getElementById("usuario");
    txtUsuario.value = "";
    
    document.getElementById("password").value = "";
    return false;
}


// Limpiar el formulario 
function resetearFormularioLogin(){
    document.getElementById('form-login').reset();
    return false;
}