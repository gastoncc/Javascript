
// Almacenar el objeto JSON en el Storage como una cadena
var servicio = {
    nombre: "ESMALTADO SEMIPERMANENTE",
    descripcion: "El semipermanente es un sistema de duración corta...",
    precio: 15
};
localStorage.setItem("servicioJSON", JSON.stringify(servicio));

// Función para mostrar el servicio en el DOM
function mostrarServicio() {
    var servicioJSON = localStorage.getItem("servicioJSON");
    var servicioObjeto = JSON.parse(servicioJSON);
    
    var card = document.querySelector(".card");

    var titulo = card.querySelector(".card-title");
    titulo.textContent = servicioObjeto.nombre;

    var descripcion = card.querySelector(".card-text");
    descripcion.innerHTML = servicioObjeto.descripcion;

    var precio = document.createElement("p");
    precio.textContent = "Precio: $" + servicioObjeto.precio;

    card.querySelector(".card-body").appendChild(precio);
}

// Agregar evento al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    mostrarServicio();

    var pedirBtn = document.querySelector(".btn.btn-primary");
    pedirBtn.addEventListener("click", function() {
        alert("Pedido realizado. ¡Gracias!");
    });
});
