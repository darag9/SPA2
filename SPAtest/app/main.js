import { Router } from './router/Router.js';

// Ejecuta el enrutador cuando carga la página y cuando cambia el hash
document.addEventListener('DOMContentLoaded', Router);
window.addEventListener('hashchange', Router);