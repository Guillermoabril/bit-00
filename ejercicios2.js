'use strict'

fetch('https://random-d.uk/api/v2/random')
.then((response) => response.json())
.then((json) => console.log(json))
.catch((error) => console.log('Se genero un error:', error))


/* crear una pagina con la siguiente estructura
cuadro con imagen
boton
*/