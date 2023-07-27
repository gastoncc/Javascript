function saludar() {
  alert("Primera Preentrega");
}

function sumar(a, b) {
  return a + b;
}
let resultado = sumar(3, 5);
console.log(resultado); 

let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
alert("Holaaaa! " + nombre + " " + apellido);


let nombr = prompt("Ingrese su nombre:");
let edad = prompt("Ingrese su edad:");
alert(nombr + " tiene " + edad + " años.");


let resultados = 233 + 356 + 478;
alert("El resultado es: " + resultado);



const contraseñaCorrecta = "12345";
const correoCorrecto = "56789";
let contraseña = prompt("Ingrese su contraseña:");
let correo = prompt("Ingrese su correo electrónico:");
while (contraseña !== contraseñaCorrecta || correo !== correoCorrecto) {
  alert("Contraseña o correo electrónico incorrectos. Inténtelo de nuevo.");
  
  contraseña = prompt("Ingrese su contraseña:");
  correo = prompt("Ingrese su correo electrónico:");
}
alert("Inicio de sesión exitoso. Bienvenido " + correo + "!");


let dia = prompt("Ingrese un día de la semana")
switch (dia) {
  case "lunes":
    alert("Hoy es lunes");
    break;
  case "martes":
    alert("Hoy es martes");
    break;
  case "miércoles":
  case "miercoles": 
    alert("Hoy es miércoles");
    break;
  case "jueves":
    alert("Hoy es jueves");
    break;
  case "viernes":
    alert("Hoy es viernes");
    break;
  case "sábado":
  case "sabado":
    alert("Hoy es sábado");
    break;
  case "domingo":
    alert("Hoy es domingo");
    break;
  default:
    alert("No se reconoce ese día de la semana");
}


let numeros = [10, 25, 30, 45, 50];
let numerosMayores30 = numeros.filter(function(numero) {
  return numero > 30;
});
console.log(numerosMayores30);

let numeroBuscado = numeros.find(function(numero) {
  return numero === 25;
});
console.log(numeroBuscado);

let incluyeNumero30 = numeros.includes(30);
console.log(incluyeNumero30);

let indiceNumero45 = numeros.indexOf(45);
console.log(indiceNumero45);


let personas = [];

while (true) {
  let nombre = prompt("Ingrese el nombre o 'termine' para terminar):");
  if (nombre.toLowerCase() === "termine") {
    break;
  }
  let correo = prompt("Ingrese el correo electrónico:");
  let dni = prompt("Ingrese el DNI:");
  let fechaNacimiento = prompt("Ingrese la fecha de nacimiento (dd/mm/aaaa):");
  let persona = {
    nombre: nombre,
    correo: correo,
    dni: dni,
    fechaNacimiento: fechaNacimiento
  };
  personas.push(persona);
}
console.log("Datos ingresados:");
console.log(personas);
