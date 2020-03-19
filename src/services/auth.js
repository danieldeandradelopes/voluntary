export const TOKEN_KEY = '@movie-token';
export const EMAIL_USER = '@movie-email';

export const istAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getEmail = () => localStorage.getItem(EMAIL_USER);

export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const email = emailUser => {
    localStorage.setItem(EMAIL_USER, emailUser);
};

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(EMAIL_USER);
};