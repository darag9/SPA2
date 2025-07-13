import LoginView from '../components/LoginView.js';
import RegisterView from '../components/RegisterView.js';
import DashboardView from '../components/DashboardView.js';
import CreateBookView from '../components/CreateBookView.js';
import EditBookView from '../components/EditBookView.js';
import NotFound from '../components/NotFound.js';
import { isAuthenticated, isGuest } from './guards.js';

// Objeto que define todas las rutas de la aplicación
export const routes = {
    // Rutas para usuarios no autenticados
    '/': { component: LoginView, guard: isGuest },
    '/login': { component: LoginView, guard: isGuest }, // [cite: 12]
    '/register': { component: RegisterView, guard: isGuest }, // [cite: 11]
    
    // Rutas protegidas para usuarios autenticados
    '/dashboard': { component: DashboardView, guard: isAuthenticated }, // [cite: 35]
    '/dashboard/books/create': { component: CreateBookView, guard: isAuthenticated }, // [cite: 24, 36]
    '/dashboard/books/edit': { component: EditBookView, guard: isAuthenticated }, // [cite: 24, 37]
    
    // Ruta para páginas no encontradas
    'not-found': { component: NotFound } // [cite: 31]
};