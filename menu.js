const menuF = prompt(`ACCEDE A UNO DE LOS MENUS: 
        1. Registrar usuarios. 
        2. Registrar libross. 
        3. Prestar un libro.
        4. Devolver un libro
        5. Listar:
        6. Salir.`)

if (menuF == 1) {
    const menu1 = (`ELIGE UNA DE LAS FUNCIONES: 
    1. Agregar un producto.
    2. Listar los productos.
    3. Buscar productos por nombre o categoria.`)

    if (menu1 == 1){
        agregarproductos()
    }  else if (menu1 == 2){
        listaproductos(menu)
    } else if (menu1 == 3){
        buscarproducto(menu)
     } else if (menu1 == 4){
        buscarproducto(menu)
    } else {console.log("Escribiste algo invalido")}
}