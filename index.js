
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


let resultado = 233 + 356 + 478;
alert("El resultado es: " + resultado);



let contraseñaCorrecta = "12345";
let correoCorrecto = "56789";
let contraseña = prompt("Ingrese su contraseña:");
let correo = prompt("Ingrese su correo electrónico:");
while (contraseña !== contraseñaCorrecta || correo !== correoCorrecto) {
  alert("Contraseña o correo electrónico incorrectos. Inténtelo de nuevo.");
  
  contraseña = prompt("Ingrese su contraseña:");
  correo = prompt("Ingrese su correo electrónico:");
}
alert("Inicio de sesión exitoso. Bienvenido " + correo + "!");


while (true) {
    let dia = prompt("Ingrese el día");
    if (dia === "lunes") {
      alert("lunes");
      break;
    } else if (dia === "martes") {
      alert("Es martes");
      break;
    } else if (dia === "miercoles") {
      alert("Es miercoles");
      break;
    } else if (dia === "jueves") {
      alert("Es jueves");
      break;
    } else if (dia === "viernes") {
      alert("Es viernes");
      break;
    } else if (dia === "sabado") {
      alert("Es fin de semana");
      break;
    } else if (dia === "domingo") 
    {alert("Es fin de semana") }
}





