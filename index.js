function entregaFinal() {  
    // Definir un objeto "producto" 
    const producto = {  
      nombre: "ESMALTADO SEMIPERMANENTE",  
      descripcion: "El semipermanente es un sistema de duración corta...",  
      precio: 10.99,  
    };  
  
    // Almacenar el objeto "producto" en localStorage 
    localStorage.setItem("producto", JSON.stringify(producto));  
  
    // Crear un párrafo para mostrar el precio del producto 
    const precioParrafo = document.createElement("p");  
    precioParrafo.textContent = `Precio: $${producto.precio}`;  
    document.querySelector(".card-body").appendChild(precioParrafo);  
  
    // Agregar un evento de clic al botón "pedidoBtn" 
    document.addEventListener('DOMContentLoaded', function () {
        const pedidoBtn = document.getElementById('pedidoBtn');
        pedidoBtn.addEventListener('click', function () {
            alert('Pedido realizado');
        });
    });
    
  
    // Cambiar el color del párrafo de precio según el precio del producto 
    if (producto.precio > 15) {  
      precioParrafo.style.color = "red";  
    } else {  
      precioParrafo.style.color = "green";  
    }  
  
    // Simular la disponibilidad del producto en stock 
    let stockDisponible = true;  
    if (stockDisponible) {  
      alert("El producto está disponible en stock.");  
    } else {  
      alert("El producto no está disponible en stock.");  
    }  
  
    // Definir un array de productos y mostrarlos en una lista 
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
  
    // función flecha y destructuracion 
    const suma = (a, b) => a + b; 
    const { nombre, descripcion } = producto; 
  
    // Librería 
    $("#pedidoBtn").on("click", () => { 
      alert("¡Pedido realizado con jQuery!"); 
    }); 
  
    fetch('datos.json')
    .then(response => response.json()) 
    .then(data => {
        // Accedemos a los datos y los mostramos en la página
        document.getElementById('titulo').textContent = data.titulo;
        document.getElementById('descripcion').textContent = data.descripcion;
        document.getElementById('imagen').src = data.imagen;
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });

}
 
  
  entregaFinal();


