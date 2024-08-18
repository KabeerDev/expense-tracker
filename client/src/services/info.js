import axios from './../utils/axios';

export const getInfo = async () => axios.get('/info');
export const getSingle = async (id) => axios.get(`/info/${id}`);
export const add = async (data) => axios.post('/expense/add', data);
export const del = async (id) => axios.delete(`/expense/delete/${id}`);
export const update = async (id, data) => axios.put(`/expense/update/${id}`, data);