console.log(`
    
    
    
✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦
║      📖  Todos los libros de la biblioteca  📖   ║
✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦
    
    
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

libros.forEach(libro => {
  console.log(`
📚 ${libro.titulo}
   ✍️  Autor: ${libro.autor}
   📌 Estado: ${libro.estado}
-----------------------------`)})