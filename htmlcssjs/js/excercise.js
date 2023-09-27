"use strict";


// const d = document;
// const $form = d.querySelector('form')
// const $p = d.querySelector('p')

// let username = null;

// $form.name.addEventListener('input', (event) => {
//     username = event.target.value
// })

// $form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     saludar(username)
// })

// function saludar(name) {
//     $p.classList.add('success')
//     if(name){
//     $p.textContent = `Hola, ${name}`
//     $form.reset()
//     } else {
//         $p.classList.add('danger')
//         $p.textContent = `Por favor ingresa tu nombre`
//     }
// }

const d = document;
const urlApi = "https://jsonplaceholder.typicode.com/users"

const $root = d.getElementById('root' )
  // async function getUsers(url) {
  //     try {
  //         let res = await fetch(url)
  //         res = await res.json()
  //         console.log(res);

  //     } catch (error) {
  //         console.log(error);
  //     } finally{
  //         console.log('finally...');
  //     }
  // }

  // getUsers(urlApi)

const showUsers = (users) => {
    let html = "";
    for(let i = 0; i < users.length; i++) {
        html += `<li>${users[i].name}</li>`
    }
    $root.innerHTML = html
}

(async () => {
    try { setTimeout( async () => {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        res = await res.json();
        showUsers(res)  
    }, 3000);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finally...");
    }
  })();
