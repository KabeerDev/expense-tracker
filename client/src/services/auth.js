import axios from './../utils/axios';

export const signUpUser = async (data) => axios.post('/auth/signup', data);
export const signInUser = async (data) => axios.post('/auth/login', data);
export const refreshToken = async () => axios.get('/auth/token');