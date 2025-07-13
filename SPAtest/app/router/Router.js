import { routes } from './routes.js';

export function Router() {
    // Obtenemos la ruta base sin los parámetros de consulta
    const path = window.location.hash.slice(1).split('?')[0] || '/';
    let route = routes[path] || routes['not-found'];

    // Si la ruta es para editar, asegúrate de que coincida
    if (path.startsWith('/dashboard/books/edit')) {
        route = routes['/dashboard/books/edit'];
    }

    // Ejecuta el guardián de la ruta
    if (route.guard && !route.guard()) {
        return; // El guardián se encarga de la redirección
    }
    
    // Renderiza el componente de la vista
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = ''; // Limpia la vista anterior
    appContainer.appendChild(route.component());
}