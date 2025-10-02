export function menu () {
    const menuF = (`ACCEDE A UNO DE LOS MENUS: 
        1. Registrar usuarios. 
        2. Registrar libros. 
        3. Prestar un libro.
        4. Devolver un libro.
        5. Listar:
        6. Salir.`)

    if (menuF == 1){
        Registrarusuarios()
    } else if (menuF == 2){
        Registrarlibros()
    } else if (menuF == 3){
        prestarunlibro()       
    } else if (menuF == 4){
        Devolverunlibro()
    } else if (menuF ==  5){
        Listar()
    } else if (menuF ==  6){
        console.log("Has decidido salir.")
    } else {
        console.log("Escribiste algo invalido")
    }
}