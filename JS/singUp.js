function validarRegistro(event) {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const documento = document.getElementById('documento').value;
    const usuario = document.getElementById('usuario').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmarPassword = document.getElementById('confirmarPassword').value;

    // Validaciones simples
    if (nombre === '' || apellido === '' || documento === '' || usuario === '' || email === '' || password === '' || confirmarPassword === '') {
        alert('Por favor, completa todos los campos.');
        return false;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmarPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }
    
    // Verificar si el usuario ya está registrado
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    // Verificar si el usuario ya existe
    if (usuariosGuardados.some(user => user.usuario === usuario)) {
        alert("El usuario ya está registrado.");
        return;
    }
    
    // Guardar el nuevo usuario en el localStorage
    usuariosGuardados.push({ usuario, email, password });
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));
    
    alert("Registro exitoso! Ahora puedes iniciar sesión.");
    
    // Redirigir al login
    window.location.href = 'login.html';
};

function coincidirContrasenia(){
    var password = document.getElementById("password");
    var confirmarPassword = document.getElementById("confirmarPassword");
    var avisoPassword = document.getElementById("avisoPassword");
    var btnRegistrarse = document.getElementById("btnRegistrarse");
    
    btnRegistrarse.disabled = true; //Botón en desactivado o apagado
    
    
    if(password.value.length === 0 || confirmarPassword.value.length === 0){
        avisoPassword.innerHTML = "Ninguna de las contraseñas puede quedar vacias";
        avisoPassword.style.color = "blue";
        btnRegistrarse.disabled = true;
        
    }else if(password.value !== confirmarPassword.value){
        avisoPassword.innerHTML = "Las contraseñas deben coincidir";
        avisoPassword.style.color = "red";
        btnRegistrarse.disabled = true;
        
    }else{
        avisoPassword.innerHTML = "Las contraseñas coinciden";
        avisoPassword.style.color = "green";   
        btnRegistrarse.disabled = false;
    }
}


// Limpiar el formulario después de simular el registro
function resetearFormularioRegistro(){
    document.getElementById("form-registro").reset();
    var avisoPassword = document.getElementById("avisoPassword");
    var btnRegistrarse = document.getElementById("btnRegistrarse");
    
    btnRegistrarse.disabled = true;
    avisoPassword.innerHTML = "------------------";
    avisoPassword.style.color = "black";
    
    return false;
    
}

