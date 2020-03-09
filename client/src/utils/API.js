import axios from 'axios';

export default {
    createUser: (data) => axios.post(`/api/user`, data),
    userLogin: (data) => axios.post(`/api/user/login`, data),
    updateUser: (data) => axios.patch(`/api/user/profile`, data),
    deleteUser: () => axios.delete(`/api/user/profile`),
    getUser: () => axios.get(`/api/user/profile`),
    logout: () => axios.post(`api/user/logout`),
    logoutAll: () => axios.post(`api/user/logoutAll`),
    createTask: (data, header) => axios.post(`/api/task`, data, header),
    updateTask: (id, data) => axios.patch(`/api/task/${id}`, data),
    deleteTask: (id) => axios.delete(`/api/task/${id}`),
    getTask: (id) => axios.get(`/api/task/${id}`),
    getTasks: () => axios.get(`/api/task`)
}