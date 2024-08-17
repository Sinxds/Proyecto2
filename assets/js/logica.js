function validarCorreo() {
    const correo = document.getElementById('correo').value;
    const contenido = document.getElementById("contenido");
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexCorreo.test(correo)) {
        contenido.innerHTML = "¡Enviado! Me contactaré contigo enseguida";
    } else {
        contenido.innerHTML = "Correo electrónico inválido";
    }
}

window.onload = function () {
    document.getElementById("validaButton").addEventListener("click", validarCorreo);
}
