// alert("Bienvenido a mi página sobre la Formula 1");
//Aquí estoy poniendo un pop-up con JavaScript en el cual doy la bienvenida a mi página web
function form_completo() {
    var nombre = document.forms["formulario"]["nombre"].value;
    if (nombre === null || nombre === "") {
        alert("Te falta por rellenar el nombre");
        return false;
    }
}
function valid_password() {
    var contraseña = document.forms["formulario"]["contraseña"].value;
    if (contraseña == 0) {
        alert("La contaseña no puede quedar vacia");
        return false;
    }
}
function valid_correo() {
    var email = document.forms["formulario"]["correo"].value;
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email))) {
        alert("El correo solo puede contener caracteres permitidos");
        return false;
    }
}
function warning_password() {
    var contraseña1 = document.forms["formulario"]["contraseña"].value;
    var contraseña2 = document.forms["formulario"]["contraseña2"].value;
    if (contraseña1 != contraseña2) {
        alert("Las contraseñas no coinciden");
        return false;
    } else {
        alert("Las contraseñas coinciden");
        return false;
    }
}
function profilepic() {
    alert("Seleccione una imagen");
    return false;
}
