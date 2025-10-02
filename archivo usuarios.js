
const usuarios = [
  { nombre: 'Juan Perez', email: 'juan@email.com' },
  { nombre: 'Ana Lopez', email: 'ana@email.com' }
];

function registrarUsuario(nombre, email) {
  if (!nombre || !email) {
    console.log('Error: Debes proporcionar nombre y correo electrónico.');
    return;
  }
  // Validar email básico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log('Error: Correo electrónico inválido.');
    return;
  }

  usuarios.push({ nombre, email });
  console.log(`Usuario registrado: ${nombre} - ${email}`);
}

function listarUsuarios() {
  console.log('Usuarios registrados:');
  usuarios.forEach((u, i) => console.log(`${i + 1}. ${u.nombre} - ${u.email}`));
}

module.exports = {
  usuarios,
  registrarUsuario,
  listarUsuarios
};
