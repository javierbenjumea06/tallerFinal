import {usuarios, registrarUsuario} from "./usuarios.js"
import { prestarLibro, devolverLibro } from "./prestamos.js"
import { agregarlibro, listarTodos, listarDisponibles, listarPorAutor } from "./libros.js"

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
}, 
{
    "titulo":"Bullet Train",
    "autor":"Kōtarō Isaka",
    "estado":"prestado",
},
{
    "titulo":"El principito",
    "autor":"Antoine de Saint-Exupéry",
    "estado":"prestado",

}]

const nombre = "Ernesto Orozco"
const email = "ernesto.orozco@gmail.com"

registrarUsuario(nombre, email)
console.log(usuarios)

const libroAPedirPrestado = "Cien Años de Soledad"
const libroADevolver = "Harry Potter"

prestarLibro(libros, libroAPedirPrestado)
devolverLibro(libros, libroADevolver)

const libroNuevo = { titulo: "No tengo boca y debo gritar", autor: "Harlan Ellison", estado: "disponible" }
const autor = "Fahim Florez"

agregarlibro(libros, libroNuevo)
console.log("✅ Disponibles:", listarDisponibles(libros));
console.log(`✍️ Libros de ${autor}:`, listarPorAutor(libros, autor));
listarTodos(libros)
