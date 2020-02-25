    // alert("Bienvenido a mi página sobre la Formula 1");
    //Aquí estoy poniendo un pop-up con JavaScript en el cual doy la bienvenida a mi página web
    function form_completo() {
        var nombre = document.forms["formulario"]["apodo"].value;
        if (nombre === null || nombre === "") {
            alert("Te faltan campos por rellenar");
            return false;
        }
    }
    function valid_password() {
        var min_length = document.forms["formulario"]["telefono"].value;
        if (min_length < 5) {
            alert("La contaseña es demasiado corta");
            return false;
        }
    }
    function valid_correo() {
        var email = document.forms["formulario"]["correo"].value;
        if (isNaN(correo)) {
            alert("El correo contiene caracteres no permitidos, prueba de nuevo");
            return false;
        }
    }
    function warning_password() {
        var password = document.forms["formulario"]["contraseña"].value;
        if (password < 2){
        alert("Cuidado con la contraseña que eliges ya que no la podras cambiar");
        return false;
        }
    }
    function driver() {
        var piloto = document.forms["formulario"]["Mclaren_F1"].value;
        if (piloto === "Mclaren") {
            alert("Has seleccionado al mejor piloto");
            return false;
        }
    }