var restricciones = {
    nombre: /^[a-zA-ZÄ-ÿ\s]+$/,
    rut: /^\d{8,9}$/,
    dv: /^[\dk]{1}$/,
    telefono: /^\d{9}$/
};
var formulario = document.querySelectorAll("#formulario inputs");
//let nombre:any = formulario.elements[1];
var elementos = formulario.elements;
formulario.forEach(function (element) {
    element.addEventListener("keyup", function (event) {
        console.log("teclita");
    });
});
/*formulario.array.forEach(function(elemento) {
    elemento.addEventListener('keyup', function() {
        console.log("tecla ");
    });
});

formulario.addEventListener("submit",function(event){
    
    event.preventdefault();
});*/ 
