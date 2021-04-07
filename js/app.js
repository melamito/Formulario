var restricciones = {
    nombre: /^[a-zA-ZÄ-ÿ\s]+$/,
    rut: /^\d{8,9}$/,
    dv: /^[\dk]{1}$/,
    telefono: /^\d{9}$/
};
var formulario = document.getElementById("formulario");
var mensaje = document.getElementById("mensaje");
formulario.addEventListener("submit", function (event) {
    mensaje.style.display = "block";
    formulario.style.display = "none";
    event.preventDefault();
});
function resetear() {
    console.log("holito");
    mensaje.style.display = "none";
    formulario.style.display = "block";
    formulario.reset();
}
