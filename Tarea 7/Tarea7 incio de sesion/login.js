/**
 * Función para validar el inicio de sesión del usuario.
 * @returns {boolean} Retorna true si el inicio de sesión es válido, de lo contrario, retorna false.
 */
function validarInicioSesion() {
    // Obtener el valor del campo de correo electrónico
    var email = document.getElementById('email').value;
    // Obtener el valor del campo de contraseña
    var password = document.getElementById('password').value;

    // Crear un elemento div para mostrar mensajes de error
    var errorDiv = document.createElement('div');
    // Establecer la clase del elemento div como 'error' para darle estilo
    errorDiv.className = 'error';
    // Variable para almacenar mensajes de error
    var errorText = '';

    // Verificar si el campo de correo electrónico está vacío
    if (email.trim() === '') {
        // Agregar mensaje de error si el campo está vacío
        errorText += 'Por favor, ingrese su correo electrónico.<br>';
    }

    // Verificar si el campo de contraseña está vacío
    if (password.trim() === '') {
        // Agregar mensaje de error si el campo está vacío
        errorText += 'Por favor, ingrese su contraseña.<br>';
    }

    // Verificar si hay mensajes de error
    if (errorText !== '') {
        // Establecer el contenido HTML del elemento div con los mensajes de error
        errorDiv.innerHTML = errorText;
        // Agregar el elemento div de error al formulario de inicio de sesión
        document.getElementById('loginForm').appendChild(errorDiv);
        // Retornar false para detener el envío del formulario
        return false;
    }

    // Simulación de inicio de sesión (reemplazar con la lógica real de inicio de sesión)
    alert('Iniciando sesión...\nCorreo electrónico: ' + email + '\nContraseña: ' + password);
    // Retornar true para permitir el envío del formulario
    return true;
}
