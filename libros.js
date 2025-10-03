/*
2.Registrar libros con:
Título
Autor
Estado (disponible o prestado)
*/
export function agregarlibro(libros, libronuevo) {
  libros.push(libronuevo);
}

/*
5.Listar:
Todos los libros.
Solo los disponibles.
Libros por un autor (usando .filter).
*/
import libros from "./main.js";

export function listarTodos() {
  return libros;
}

export function listarDisponibles() {
  return libros.filter(libro => libro.estado === "disponible");
}

export function listarPorAutor(nombreAutor) {
  return libros.filter(
    libro => libro.autor.toLowerCase() === nombreAutor.toLowerCase()
  );
}