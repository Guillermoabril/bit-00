'use strict'
const d = document;
const $root = d.getElementById('root')
const $btn = d.querySelector('button')

d.addEventListener('DOMContentLoaded', () => {
    const $p = d.createElement('p')
    $p.textContent = 'Ocurrio un error'
    $root.appendChild($p)
    $p.classList.add('error')
})

console.log($btn)


