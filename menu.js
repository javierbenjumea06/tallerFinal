const menuF = prompt(`ACCEDE A UNO DE LOS MENUS: 
        1. Registrar usuarios. 
        2. Registrar libros. 
        3. Prestar un libro.
        4. Devolver un libro.
        5. Listar:
        6. Salir.`)

if (menuF == 1) {
    const menu1 = (`ELIGE UNA DE LAS FUNCIONES: 
    1. Agregar un producto.
    2. Listar los productos.
    3. Buscar productos por nombre o categoria.`)

    if (menu1 == 1){
        Registrarusuarios()
    } else if (menu1 == 2){
        Registrarlibros()
    } else if (menu1 == 3){
        Prestarunlibro()
    } else if (menu1 == 4){
        Devolverunlibro()
    } else if (menu1 ==  5){
        Listar()
    } else if (menu1 ==  6){
        salir()
    } else {console.log("Escribiste algo invalido")}
}