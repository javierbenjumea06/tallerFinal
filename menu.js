import { devolverLibro, prestarLibro } from "./prestamos"

export function menu () {
    const menuF = (`ACCEDE A UNO DE LOS MENUS: 
        1. Registrar usuarios. 
        2. Registrar libros. 
        3. Prestar un libro.
        4. Devolver un libro.
        5. Listar:
        6. Salir.`)

    if (menuF == 1){
        registrarUsuario()
    } else if (menuF == 2){
        Registrarlibros()
    } else if (menuF == 3){
        prestarLibro()       
    } else if (menuF == 4){
        devolverLibro()
    } else if (menuF ==  5){
        Listar()
    } else if (menuF ==  6){
        console.log("Has decidido salir.")
    } else {
        console.log("Escribiste algo invalido")
    }
}