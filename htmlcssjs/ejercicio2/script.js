'use strict'

const d = document;
const $form = d.querySelector('form')
const $p = d.querySelector('p')
let nombre = d.getElementById('name').value
let edad = d.getElementById('age').value


console.log(nombre)

$form.addEventListener('submit', (event) => {
    event.preventDefault()
    resultado(nombre, edad)
})

function resultado(nombre, edad) {
    if (edad >= 18) {
    $p.textContent = (`Hola ${nombre}, eres mayor de edad, Bienvenida!!`)}
    else if ( edad < 18 ) {
    $p.textContent = (`Chao ${nombre}, eres menor de edad :(`)
}
}
