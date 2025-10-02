import {usuarios, registrarUsuario} from "./usuarios.js"
import { prestarLibro, devolverLibro } from "./prestamos.js"

let libros = [{
    "titulo":"Cien Años de Soledad",
    "autor":"Tomas Vega",
    "estado":"disponible",
}, 
{
    "titulo":"Harry Potter: Programación Magica",
    "autor":"Javier Benjumea",
    "estado":"prestado",
},
{
    "titulo":"Battle Royale",
    "autor":"Fahim Florez",
    "estado":"disponible",
}]

const nombre = "Ernesto Orozco"
const email = "ernesto.orozco@gmail.com"

registrarUsuario(nombre, email)
console.log(usuarios)

const libroAPedirPrestado = "Cien Años de Soledad"
const libroADevolver = "Harry Potter"

prestarLibro(libros, libroAPedirPrestado)
devolverLibro(libros, libroADevolver)
libros.forEach(libro => console.log(libro))