/**
 * Función para validar el formulario de registro de usuario.
 * @returns {boolean} Devuelve true si el formulario es válido, false si hay errores.
 */
function validarRegistro() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;
    var genero = document.getElementById('genero').value;
    var telefono = document.getElementById('telefono').value;
    var direccion = document.getElementById('direccion').value;

    // Crear un elemento div para mostrar mensajes de error
    var errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    var errorText = ''; // Variable para almacenar los mensajes de error

    // Validar cada campo del formulario
    if (nombre.trim() === '') {
        errorText += 'Por favor, ingrese su nombre completo.<br>';
    }

    if (email.trim() === '') {
        errorText += 'Por favor, ingrese su correo electrónico.<br>';
    }

    if (password.trim() === '') {
        errorText += 'Por favor, ingrese su contraseña.<br>';
    }

    if (fechaNacimiento.trim() === '') {
        errorText += 'Por favor, seleccione su fecha de nacimiento.<br>';
    }

    if (telefono.trim() === '') {
        errorText += 'Por favor, ingrese su número de teléfono.<br>';
    }

    if (direccion.trim() === '') {
        errorText += 'Por favor, ingrese su dirección.<br>';
    }

    // Si hay errores, mostrar mensajes de error y detener el envío del formulario
    if (errorText !== '') {
        errorDiv.innerHTML = errorText;
        document.getElementById('registroForm').appendChild(errorDiv);
        return false;
    }

    // Si no hay errores, el formulario es válido y se puede enviar
    return true;
}
