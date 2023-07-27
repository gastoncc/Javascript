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




