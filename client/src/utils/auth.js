export const setToken = (token) => {
    if (!token) return;
    localStorage.setItem('token', token);
}
export const getToken = () => {
    return localStorage.getItem('token');
}
export const removeToken = () => {
    localStorage.removeItem('token');
}
export const setTime = (token) => {
    if (!token) return;
    localStorage.setItem('time', JSON.stringify(Date.noW()));
}
export const getTime = () => {
    return localStorage.getItem('time');
}
export const removeTime = () => {
    localStorage.removeItem('time');
}