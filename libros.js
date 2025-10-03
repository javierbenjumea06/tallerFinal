/*
Registrar libros:
*/
export function agregarlibro(libros, libronuevo) {
  libros.push(libronuevo);
  console.log(`
    +++++++++++++++++++++++++++++++++++++++
    +👍 Se agregó exitosamente el libro👍+
    +++++++++++++++++++++++++++++++++++++++
    `)
}

/*
Listar:
*/

export function listarTodos(libros) {
  console.log(`
✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦
║               📖  BIBLIOTECA  📖              ║
✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦
`)

libros.forEach(libro => {
  console.log(`
   📚 Libro: ${libro.titulo}
   ✍️ Autor: ${libro.autor}
   📌 Estado: ${libro.estado}
-----------------------------`)});
}

export function listarDisponibles(libros) {
  return libros.filter(libro => libro.estado === "disponible");
}

export function listarPorAutor(libros, autor) {
  return libros.filter(
    libro => libro.autor.toLowerCase() === autor.toLowerCase()
  );
}