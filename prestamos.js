export const prestarLibro = (libros, libroAPedirPrestado) =>
{
const busqueda = libros.find(JSONlibro => JSONlibro.titulo.includes(libroAPedirPrestado))
if (!busqueda) {
    console.log("No se encontró el libro.")
} else if (busqueda.estado != "disponible") {
    console.log("Este libro no se encuentra disponible en el momento")
} else {
    console.log("Puedes llevarte el libro.")
    busqueda.estado = "prestado"
}
}

export const devolverLibro = (libros, libroADevolver) =>
{
const busqueda2 = libros.find(JSONlibro => JSONlibro.titulo.includes(libroADevolver))
if (!busqueda2) {
    console.log("No se encontró el libro.")
} else if (busqueda2.estado != "prestado") {
    console.log("Este libro no se ha prestado")
} else {
    console.log("Se ha devuelto el libro con exito")
    busqueda2.estado = "disponible"
}
}



