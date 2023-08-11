
// Objeto JSON para almacenar información del producto
const producto = {
  nombre: "ESMALTADO SEMIPERMANENTE",
  descripcion: "El semipermanente es un sistema de duración corta...",
  precio: 10.99,
};

// Almacenar el objeto JSON en el Local Storage
localStorage.setItem("producto", JSON.stringify(producto));

// Modificar el DOM para mostrar el precio del producto
const precioParrafo = document.createElement("p");
precioParrafo.textContent = `Precio: $${producto.precio}`;
document.querySelector(".card-body").appendChild(precioParrafo);

// Detección de eventos de usuario
document.getElementById("pedidoBtn").addEventListener("click", () => {
  alert("¡Pedido realizado!");
});

// Bloque condicional para cambiar el color del precio según el precio
if (producto.precio > 15) {
  precioParrafo.style.color = "red";
} else {
  precioParrafo.style.color = "green";
}

let stockDisponible = true;
if (stockDisponible) {
  alert("El producto está disponible en stock.");
} else {
  alert("El producto no está disponible en stock.");
}

// Array de productos
const productosArray = [
  { nombre: "Producto A", precio: 8.99 },
  { nombre: "Producto B", precio: 12.49 },
  { nombre: "Producto C", precio: 15.99 },
];

// Mostrar información de productos en el DOM
const productosList = document.createElement("ul");
document.querySelector(".card-body").appendChild(productosList);

