import { getSession } from '../services/auth.service.js';

// Redirige si el usuario NO está autenticado
export function isAuthenticated() {
    if (!getSession()) {
        window.location.hash = '/login';
        // O a la vista not-found si el reto lo especifica para rutas privadas [cite: 31]
        // window.location.hash = '/not-found'; 
        return false;
    }
    return true;
}

// Redirige si el usuario YA está autenticado
export function isGuest() {
    if (getSession()) {
        window.location.hash = '/dashboard'; // [cite: 32]
        return false;
    }
    return true;
}