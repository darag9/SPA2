import { getUserByEmail } from '../services/api.service.js';
import { saveSession } from '../services/auth.service.js';

export default function LoginView() {
    const div = document.createElement('div');
    div.innerHTML = `
        <h2>Iniciar Sesión</h2>
        <form id="login-form">
            <input type="email" placeholder="Correo" required />
            <input type="password" placeholder="Contraseña" required />
            <button type="submit">Ingresar</button>
        </form>
    `;

    const form = div.querySelector('#login-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = form.children[0].value;
        const password = form.children[1].value;
        
        const users = await getUserByEmail(email);
        if (users && users.length > 0 && users[0].password === password) {
            saveSession(users[0]); // Guarda la sesión del usuario [cite: 15]
            window.location.hash = '/dashboard'; // Redirige al dashboard
        } else {
            alert('Credenciales incorrectas');
        }
    });

    return div;
}