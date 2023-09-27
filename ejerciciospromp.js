// let nombre = prompt("Ingrese su nombre:");
// // let apellido = prompt("Ingrese su apellido:");
// let edad = prompt("Ingresa tu edad:")

// // let confirma = confirm(`Hola ${nombre} ${apellido} deseas continuar?`)

// // if(confirma === true) {
// //       alert(`Hola ${nombre} ${apellido}, Bienvenida`)
// // } else if (confirma === false) { alert(`Chao ${nombre} ${apellido}, hasta pronto`)}

// // document.write(`Hola ${nombre} ${apellido}`)
// // alert(`Hola ${nombre} ${apellido}`)

// if (edad >= 18) {
//       alert(`Hola ${nombre}, eres mayor de edad, Bienvenida!!`)
// } else if ( edad < 18 ) {
//       alert(`Chao ${nombre}, eres menor de edad :(`)
// }


// let rol = prompt("Ingrese su rol:")

// switch (rol) {
//       case "administrador":
//         alert(`Hola ${nombre}, nuestro ${rol}`);  
//             break;
//       case "ventas":
//         alert(`Hola ${nombre}, asesor de ${rol}`);   
//             break;
//       case "cliente":
//         alert(`Hola ${nombre} ${rol} preferencial`);   
//             break;
//       default:
//         alert(`Hola ${nombre} ingresa un rol valido`);   
//             break;
// }

// let numero1 = prompt("Por favor ingresa un número:");

// let doble = numero * 2
// let mitad = numero / 2

// alert(`El doble del numero ${numero} es ${doble}, 
// y la mitad de ${numero} es ${mitad}`)


let numero1 = prompt("Por favor ingresa un número:");
let numero2 = prompt("Por favor ingresa otro número:");


// mostrar si es postivo, negativo o cero
// if (numero1 < 0)  {
//     alert(`El número ${numero1} es negativo`)
//     } else if (numero1 == 0) {
//         alert(`El número ${numero1} es cero`)
//     } else if (numero1 > 0) {
//         alert(`El número ${numero1} es postivo`)
//     }


// mostrar si es par o impar
// if ((numero1 % 2) == 0 ) {
//     alert(`El número ${numero1} es par`)
// } else if  ((numero1 % 2) != 0 ) {
//     alert(`El número ${numero1} es impar`)
// }


//mostrar que numero es mayor que el otro
if (numero1 > numero2 ) {
    alert(`El número ${numero1} es mayor que el numero ${numero2}`)
} else if  (numero1 < numero2) {
    alert(`El número ${numero2} es mayor que el numero ${numero1}`)
}
