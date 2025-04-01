function Registrar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let usuario = document.getElementById("usuario").value;
    let Contraseña = document.getElementById("Contraseña").value;
    let ConfirmarContraseña = document.getElementById("ConfirmarContraseña").value;

    let array = [
        nombre,
        apellido,
        email,
        usuario,
        Contraseña,
        ConfirmarContraseña
    ]

    localStorage.setItem("user", JSON.stringify(array));
    alert("Usuario registrado correctamente")
    window.location.href = "../vistas/Entrenador.html"
}