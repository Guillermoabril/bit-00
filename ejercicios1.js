'use strict'

const d = document
const $form1= d.querySelector('#form1')
const $form2= d.querySelector('#form2')
const $form3= d.querySelector('#form3')
const $form4= d.querySelector('#form4')
const $form5= d.querySelector('#form5')
const $form6= d.querySelector('#form6')
const $p = d.querySelector('#p1')
const $p2 = d.querySelector('#p2')
const $p3 = d.querySelector('#p3')
const $p4 = d.querySelector('#p4')
const $p5 = d.querySelector('#p5')
const $p6 = d.querySelector('#p6')
const $li1 = d.querySelector('#li1')
const $li2 = d.querySelector('#li2')
const $li3 = d.querySelector('#li3')
const $li4 = d.querySelector('#li4')
const $li5 = d.querySelector('#li5')
const $li6 = d.querySelector('#li6')
const $li7 = d.querySelector('#li7')
const $li8 = d.querySelector('#li8')
const $li9 = d.querySelector('#li9')
const $li10 = d.querySelector('#li10')

// Leer nombre y apellido, saludar por nombre y apellido.

$form1.addEventListener('submit', (event) => {
    event.preventDefault()
    let nombre = d.getElementById('nombre').value
    let apellido = d.getElementById('apellido').value
     
    if(nombre && apellido) {
        $p.textContent = `Bienvenido ${nombre} ${apellido}.`
    } else {$p.textContent = `Datos incompletos, diligencie todos los campos`}
})

// Pregunte al usuario si desea continuar, responder con hola o adiós.
// Leer nombre y edad, Mostrar si es o no mayor de edad.

$form2.addEventListener('submit', (event) => {
    event.preventDefault()
    let nombre = d.getElementById('nombre2').value
    let edad = d.getElementById('edad').value
     if( nombre && edad >= 18) {
        $p2.textContent = `Hola ${nombre} eres mayor de edad sigue!!`
     } else if ( nombre && edad < 18) {
        $p2.textContent = `Hola ${nombre} eres menor de edad trae acudiente`
     } else {$p2.textContent = `Datos incompletos, diligencie todos los campos`}
})

// Leer un rol, (admin, ventas, cliente), acceso de acuerdo al rol.

$form3.addEventListener('submit', (event) =>{
    event.preventDefault()
    let nombre = d.getElementById('nombre3').value
    let rol = d.getElementById('rol').value

    if(!nombre || !rol) {
        $p3.textContent = `Rol invalido o campos incompletos,
        ingrese información valida`
    } else if(rol == "administrador") {
        $p3.textContent = `Ingreso valido de ${nombre} como ${rol}`
    } else if(rol == "ventas") {
        $p3.textContent = `Ingreso valido de ${nombre} como asesor de ${rol}`
    } else if(rol == "cliente") {
        $p3.textContent = `Ingreso valido de ${nombre} como ${rol}, un placer tenerte de regreso`
    }
})

// Leer un número, mostrar el doble de n.
// Leer un número, mostrar la mitad de n.
// Leer un número, mostrar si es positivo, negativo o cero.
// Leer un número, mostrar si es par o impar.

$form4.addEventListener('submit', (event) => {
    event.preventDefault()
    let numero = parseInt(d.getElementById('numero').value)
    
    if(numero){
    $li1.textContent = `El doble del numero ${numero} es ${numero * 2}`
    $li2.textContent = `La mitad del numero ${numero} es ${numero / 2}`

    if(numero > 0) {$li3.textContent = `El número ${numero} es postivo`}
    else if (numero == 0) {$li3.textContent = `El número ${numero} es cero`}
    else if (numero < 0) {$li3.textContent = `El número ${numero} es negativo`}
    
    if(numero % 2 == 0) {$li4.textContent = `El numero ${numero} es par`}
    else if(numero % 2 != 0) {$li4.textContent = `El numero ${numero} es impar`}
    } else {$p4.textContent = `Datos incompletos, diligencie todos los campos`}
    
})

// Leer dos números, mostrar el mayor.

$form5.addEventListener('submit', (event) => {
    event.preventDefault()
    let numero1 = parseInt(d.getElementById('numero1').value)
    let numero2 = parseInt(d.getElementById('numero2').value)

    if(numero1 && numero2){
    if (numero1 > numero2) {
        $p5.textContent = `El número ${numero1} es mayor que el número ${numero2}`
    } else if(numero1 == numero2) { 
        $p5.textContent = `Los dos números son iguales`
    } else if(numero1 < numero2) {
        $p5.textContent = `El número ${numero1} es menor que el número ${numero2}`
    }} else {$p5.textContent = `Datos incompletos, diligencie todos los campos`}
})

// Leer dos números, mostrar operaciones básicas (+,-,x,/,%,cuadrado).

$form6.addEventListener('submit', (event) => {
    event.preventDefault()
    let numero3 = parseInt(d.getElementById('numero3').value)
    let numero4 = parseInt(d.getElementById('numero4').value)

    if(numero3 && numero4) {
    $li5.textContent = `El resultado de la operación básica de ${numero3} + ${numero4} es: ${numero3 + numero4}`
    $li6.textContent = `El resultado de la operación básica de ${numero3} - ${numero4} es: ${numero3 - numero4}`
    $li7.textContent = `El resultado de la operación básica de ${numero3} * ${numero4} es: ${numero3 * numero4}`
    $li8.textContent = `El resultado de la operación básica de ${numero3} / ${numero4} es: ${numero3 / numero4}`
    $li9.textContent = `El residuo entre ${numero3} y ${numero4} es: ${numero3 % numero4}`
    $li10.textContent = `El cuadrado del número ${numero3} es: ${numero3 ** 2}`
    } else {$p6.textContent = `Datos incompletos, diligencie todos los campos`}
})


// Leer dos números, mostrar la suma dividido en la resta.
