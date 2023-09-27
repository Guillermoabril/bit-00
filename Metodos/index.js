/* metodos integrados */
// String


// clase o plantilla
class Galleta {
    constructor(nombre, molde, sabor, colorante){
        this.nombre = "nombre";
        this.molde = "molde";
        this.sabor = "sabor";
        this.colorante = "colorante"
    }
    harina = 'de trigo';
    agua = 'pura'
    mantequilla = 'clarificada'
    azucar = 'blanca'
    hornear() {
        console.log('hornear por 20 minutos a 100 deg');
    }
}

//objeto, instancia de clase

const galleta1 = new Galleta('Ducales', 'rombo', 'queso', 'amarilla')
console.log(galleta1);
console.log(typeof galleta1);
console.log(galleta1.nombre);
galleta1.hornear()

const galleta2 = new Galleta('Especial', 'circulo', 'macadamia', 'blanca')
console.log(gallet2);
console.log(typeof galleta2);
console.log(galleta2['nombre']);
galleta2.hornear()


// STRING
// const dato = new String ('Hola')
const dato = "javascript"
console.log(dato)
console.log(typeof dato);
console.log(dato.length);

const password = prompt('ingrese su contraseña:')
console.log(password);
