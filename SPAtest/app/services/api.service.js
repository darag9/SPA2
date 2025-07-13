const API_URL = 'http://localhost:3000';

// Función genérica para peticiones
async function request(endpoint, method = 'GET', data = null) {
    const config = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (data) {
        config.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(`${API_URL}${endpoint}`, config);
        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Funciones específicas para el CRUD de libros
export const getBooks = () => request('/books');
export const createBook = (book) => request('/books', 'POST', book);
export const updateBook = (id, book) => request(`/books/${id}`, 'PUT', book);
export const deleteBook = (id) => request(`/books/${id}`, 'DELETE');
export const getBookById = (id) => request(`/books/${id}`)
// Funciones para usuarios (login, registro)
export const getUserByEmail = (email) => request(`/users?email=${email}`);
export const registerUser = (user) => request('/users', 'POST', user);