
function terceraPreentrega() {
  const producto = {
    nombre: "ESMALTADO SEMIPERMANENTE",
    descripcion: "El semipermanente es un sistema de duración corta...",
    precio: 10.99,
  };

  localStorage.setItem("producto", JSON.stringify(producto));

  const precioParrafo = document.createElement("p");
  precioParrafo.textContent = `Precio: $${producto.precio}`;
  document.querySelector(".card-body").appendChild(precioParrafo);

  document.getElementById("pedidoBtn").addEventListener("click", () => {
    alert("¡Pedido realizado!");
  });

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

  const productosArray = [
    { nombre: "Producto A", precio: 8.99 },
    { nombre: "Producto B", precio: 12.49 },
    { nombre: "Producto C", precio: 15.99 },
  ];

  const productosList = document.createElement("ul");
  document.querySelector(".card-body").appendChild(productosList);

  productosArray.forEach((producto) => {
    const productoItem = document.createElement("li");
    productoItem.textContent = `${producto.nombre}: $${producto.precio}`;
    productosList.appendChild(productoItem);
  });
}

// Llamar a la función para cargar la información
terceraPreentrega();


