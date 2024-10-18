function validarDatos(){
    var nombre = document.getElementById("nombre").value;
    var clave = document.getElementById("clave").value;
    var repeticion = document.getElementById("repeticionClave").value;

    if (nombre===""||clave===""||repeticion===""){
        document.getElementById("mensajeError").textContent = "Debe completar todos los campos";
    } else if(clave !== repeticion){
        document.getElementById("mensajeError").textContent = "Las claves no son iguales";
    }
    else{
        alert ("Datos correctos")
    }
}