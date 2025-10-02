/*Prestar un libro:
Solo si está disponible.
Cambiar el estado a prestado.
Devolver un libro:
Cambiar el estado a disponible.*/

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

const libroParaPrestar = "Cien Años de Soledad"

const prestarLibro = (libros, libroParaPrestar) =>
{
const busqueda = libros.find(a => a.titulo.includes(libroParaPrestar))
if (!busqueda) {
    console.log("No se encontró el libro.")
} else if (busqueda.estado != "disponible") {
    console.log("Este libro no se encuentra disponible en el momento")
} else {
    console.log("Puedes llevarte el libro.")
    busqueda.estado = "prestado"
}
}

const libroParaDevolver = "Harry Potter"

const devolverLibro = (libros, libroParaDevolver) =>
{

}



