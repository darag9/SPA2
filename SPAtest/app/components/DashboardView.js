import { getSession } from '../services/auth.service.js';
import { getBooks, deleteBook } from '../services/api.service.js';

export default function DashboardView() {
    const session = getSession();
    const div = document.createElement('div');
    
    let content = `<h2>Bienvenido, ${session.email} (${session.role})</h2>`;
    
    if (session.role === 'bibliotecario') {
        // Lógica para mostrar la lista de libros con opciones CRUD [cite: 24]
        content += '<h3>Gestión de Libros</h3><div id="book-list"></div>';
    } else {
        // Lógica para mostrar el catálogo y sus reservas [cite: 27, 29]
        content += '<h3>Catálogo de Libros</h3><div id="book-list"></div>';
    }
    
    div.innerHTML = content;
    
    // Cargar y mostrar los libros
    const bookListContainer = div.querySelector('#book-list');
    getBooks().then(books => {
        books.forEach(book => {
            const bookEl = document.createElement('div');
            bookEl.innerHTML = `${book.title} - ${book.author}`;
            if (session.role === 'bibliotecario') {
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Eliminar';
                deleteBtn.onclick = () => {
                    deleteBook(book.id).then(() => {
                        // Vuelve a renderizar o elimina el elemento del DOM
                        window.dispatchEvent(new Event('hashchange'));
                    });
                };
                bookEl.appendChild(deleteBtn);
            }
            bookListContainer.appendChild(bookEl);
        });
    });

    return div;
}