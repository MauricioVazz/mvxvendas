import Cookies from "js-cookie";
export const isLogged = () => {
    const token = Cookies.get('token')
    return !!token
}

export const doLogin = (token, user, rememberPassword = false) => {
    const cookieOptions = rememberPassword ? { expires: 999 } : undefined;
    Cookies.set('token', token, cookieOptions);
    Cookies.set('user', JSON.stringify(user), cookieOptions);
}

export const doLogout = () => {
    Cookies.remove('token');
    Cookies.remove('user');
}

export const getUser = () => {
    const user = Cookies.get('user');
    return user ? JSON.parse(user) : null;
}