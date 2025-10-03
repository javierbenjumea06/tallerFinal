console.log(`
✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦
║               📖  BIBLIOTECA  📖              ║
✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦
`)

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

}
];

export default libros;

libros.forEach(libro => {
  console.log(`
   📚 Libro: ${libro.titulo}
   ✍️ Autor: ${libro.autor}
   📌 Estado: ${libro.estado}
-----------------------------`)});

//2.Registrar libros con: Título, Autor, Estado (disponible o prestado)
console.log("2. Funcion Agregar libro")
import { agregarlibro } from "./libros.js";

agregarlibro(libros, { titulo: "No tengo boca y debo gritar", autor: "Harlan Ellison", estado: "disponible" });

console.log(`
    +++++++++++++++++++++++++++++++++++++++
    +👍 Se agregó exitosamente el libro👍+
    +++++++++++++++++++++++++++++++++++++++
    `)
libros.forEach(libro => {
  console.log(`
   📚 Libro: ${libro.titulo}
   ✍️ Autor: ${libro.autor}
   📌 Estado: ${libro.estado}
-----------------------------`)});

//5.Listar: Todos los libros. Solo los disponibles. Libros por un autor (usando .filter).
console.log("5. Funcion listar")
import { listarTodos, listarDisponibles, listarPorAutor } from "./libros.js";

console.log("📚 Todos los libros:", listarTodos());
console.log("✅ Disponibles:", listarDisponibles());
console.log("✍️ Libros de Fahim Florez:", listarPorAutor("Fahim Florez"));