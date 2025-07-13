const USER_SESSION_KEY = 'user_session';

export function saveSession(userData) {
    localStorage.setItem(USER_SESSION_KEY, JSON.stringify(userData));
}

export function getSession() {
    const session = localStorage.getItem(USER_SESSION_KEY);
    return session ? JSON.parse(session) : null;
}

export function removeSession() {
    localStorage.removeItem(USER_SESSION_KEY);
}