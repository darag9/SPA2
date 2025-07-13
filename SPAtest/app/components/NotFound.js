export default function NotFound() {
    const div = document.createElement('div');
    div.classList.add('not-found-container');
    div.innerHTML = `
        <h2>404 - Página No Encontrada</h2>
        <p>La ruta a la que intentas acceder no existe o no tienes permiso para verla.</p>
        <a href="#/login">Ir a Inicio de Sesión</a>
    `;
    return div;
}