
const usuarios = [
  { nombre: 'Juan Perez', email: 'juan@email.com' },
  { nombre: 'Ana Lopez', email: 'ana@email.com' },
  { nombre: 'Pedro Alvarez', email: 'pna@email.com' }
];

const nombre = "Ernesto Orozco"
const email = "ernesto.orozco@gmail.com"
function registrarUsuario(nombre, email) {
    if (!nombre || !email) {
    console.log('Error: Debes proporcionar nombre y correo electrónico.');
  }
    usuarios.push({ nombre, email });
    console.log(`Usuario registrado: ${nombre} - ${email}`);
}

registrarUsuario(nombre, email)
console.log(usuarios)