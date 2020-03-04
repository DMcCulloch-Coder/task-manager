import axios from 'axios';

export default {
    createUser: (data) => axios.post(`/api/user`, data),
    userLogin: (data) => axios.post(`/api/user/login`, data),
    updateUser: (id, data) => axios.patch(`/api/user/${id}`, data),
    deleteUser: (id) => axios.delete(`/api/user/${id}`),
    getUser: (id) => axios.get(`/api/user/${id}`),
    getUsers: () => axios.get(`/api/user`),
    createTask: (data) => axios.post(`/api/task`, data),
    updateTask: (id, data) => axios.patch(`/api/task/${id}`, data),
    deleteTask: (id) => axios.delete(`/api/task/${id}`),
    getTask: (id) => axios.get(`/api/task/${id}`),
    getTasks: () => axios.get(`/api/task`)
}