
const usuarios = [
  { nombre: 'Juan Perez', email: 'juan@email.com' },
  { nombre: 'Ana Lopez', email: 'ana@email.com' },
  { nombre: 'Pedro Alvarez', email: 'pna@email.com' }
];

const nombre = ""
const gmail = ""
function registrarUsuario(nombre, email) {
  if (!nombre || !email) {
    console.log('Error: Debes proporcionar nombre y correo electrónico.');
    return;

  }
    usuarios.push({ nombre, email });
   console.log(`Usuario registrado: ${nombre} - ${email}`);
}