import { getUserByEmail, registerUser } from '../services/api.service.js';

export default function RegisterView() {
    const div = document.createElement('div');
    div.innerHTML = `
        <h2>Registro de Nuevo Usuario</h2>
        <form id="register-form" class="form-container">
            <input type="email" id="email" placeholder="Correo electrónico" required>
            <input type="password" id="password" placeholder="Contraseña" required>
            <select id="role" required>
                <option value="" disabled selected>Selecciona un rol</option>
                <option value="visitante">Visitante</option>
                <option value="bibliotecario">Bibliotecario</option>
            </select>
            <button type="submit">Registrarse</button>
        </form>
    `;

    const form = div.querySelector('#register-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = div.querySelector('#email').value;
        const password = div.querySelector('#password').value;
        const role = div.querySelector('#role').value;

        // 1. Validar que el usuario no exista
        const existingUser = await getUserByEmail(email);
        if (existingUser && existingUser.length > 0) {
            alert('El correo electrónico ya está registrado.');
            return;
        }

        // 2. Registrar el nuevo usuario
        const newUser = await registerUser({ email, password, role });
        if (newUser) {
            alert('Registro exitoso. Ahora puedes iniciar sesión.');
            window.location.hash = '/login'; // Redirigir a la página de login
        } else {
            alert('Ocurrió un error durante el registro.');
        }
    });

    return div;
}