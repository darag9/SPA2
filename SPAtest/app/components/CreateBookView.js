import { createBook } from '../services/api.service.js';

export default function CreateBookView() {
    const div = document.createElement('div');
    div.innerHTML = `
        <h2>Agregar Nuevo Libro</h2>
        <form id="create-book-form" class="form-container">
            <input type="text" id="title" placeholder="Título del libro" required>
            <input type="text" id="author" placeholder="Autor del libro" required>
            <button type="submit">Guardar Libro</button>
        </form>
    `;

    const form = div.querySelector('#create-book-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = div.querySelector('#title').value;
        const author = div.querySelector('#author').value;

        // El libro se crea como disponible por defecto
        const newBook = { title, author, available: true };
        
        const result = await createBook(newBook);
        if (result) {
            alert('Libro agregado exitosamente.');
            window.location.hash = '/dashboard';
        } else {
            alert('Error al agregar el libro.');
        }
    });

    return div;
}