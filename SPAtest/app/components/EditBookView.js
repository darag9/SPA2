import { getBookById, updateBook } from '../services/api.service.js';

export default function EditBookView() {
    // Obtenemos el ID del libro de los parámetros de la URL
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    const bookId = params.get('id');

    const div = document.createElement('div');
    div.innerHTML = `
        <h2>Editar Libro</h2>
        <form id="edit-book-form" class="form-container">
            <input type="text" id="title" placeholder="Título del libro" required>
            <input type="text" id="author" placeholder="Autor del libro" required>
            <button type="submit">Actualizar Libro</button>
        </form>
    `;

    // Rellenar el formulario con los datos actuales del libro
    const titleInput = div.querySelector('#title');
    const authorInput = div.querySelector('#author');

    getBookById(bookId).then(book => {
        if (book) {
            titleInput.value = book.title;
            authorInput.value = book.author;
        }
    });

    const form = div.querySelector('#edit-book-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const updatedBookData = {
            title: titleInput.value,
            author: authorInput.value,
        };

        const result = await updateBook(bookId, updatedBookData);
        if (result) {
            alert('Libro actualizado exitosamente.');
            window.location.hash = '/dashboard';
        } else {
            alert('Error al actualizar el libro.');
        }
    });

    return div;
}