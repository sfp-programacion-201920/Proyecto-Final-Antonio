// alert("Bienvenido a mi página sobre la Formula 1");
//Aquí estoy poniendo un pop-up con JavaScript en el cual doy la bienvenida a mi página web
function form_completo() {
    var nombre = document.forms["formulario"]["nombre"].value;
    if (nombre === null || nombre === "") {
        alert("Te falta por rellenar el nombre");
        return false;
    }
    var apellidos = document.forms["formulario"]["apellidos"].value;
    if (apellidos === null || apellidos === "") {
        alert("Te faltan por rellenar los Apellidos");
        return false;
    }
    var pass1 = document.forms["formulario"]["contraseña"].value;
    if (pass1 === null || pass1 === "") {
        alert("Te falta por rellenar la contraseña");
        return false;
    }
    var pass2 = document.forms["formulario"]["contraseña2"].value;
    if (pass2 === null || pass2 === "") {
        alert("Te falta por rellenar la contraseña");
        return false;
    }
    var edad = document.forms["formulario"]["edad"].value;
    if (edad === null || edad === "") {
        alert("Te falta por rellenar tu edad");
        return false;
    }
    var numb = document.forms["formulario"]["telefono"].value;
    if (numb === null || numb === "") {
        alert("Te falta por rellenar el telefono");
        return false;
    }
    var mail = document.forms["formulario"]["correo"].value;
    if (mail === null || mail === "") {
        alert("Te falta por rellenar el correo");
        return false;
    }
    var date = document.forms["formulario"]["date"].value;
    if (date === null || date === "") {
        alert("Te falta por poner tu fecha de nacimiento");
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
    if (contraseña2 === null|| contraseña2 === "") {
        alert("Vuelva a escribir su contraseña en el campon de abajo");
        return false;}
    if (contraseña1 != contraseña2) {
        alert("Las contraseñas no coinciden");
        return false;}
    if (contraseña1 == contraseña2){
        alert("Las contraseñas coinciden");
        return false;}
}
function warning_password2() {
    var contraseña1 = document.forms["formulario"]["contraseña"].value;
    var contraseña2 = document.forms["formulario"]["contraseña2"].value;
    if (contraseña2 === null|| contraseña2 === "") {
        alert("Vuelva a escribir su contraseña en el campon de abajo");
        return false;}
    if (contraseña1 != contraseña2) {
        alert("Las contraseñas no coinciden");
        return false;}
    if (contraseña1 == contraseña2){
        alert("Las contraseñas coinciden");
        return false;}
}
function number() {
var number = document.forms["formulario"]["telefono"].value;
    if (isNaN(number)){
    alert("El número de telefono no pueden contener letras");
    return false;}
}