import axios from 'axios';

export default {
    createUser: (data) => axios.post(`/api/user`, data),
    userLogin: (data) => axios.post(`/api/user/login`, data),
    updateUser: (data, header) => axios.patch(`/api/user/profile`, data, header),
    deleteUser: (header) => axios.delete(`/api/user/profile`, header),
    getUser: (header) => axios.get(`/api/user/profile`, header),
    logout: (header) => axios.post(`/api/user/logout`, {}, header),
    logoutAll: (header) => axios.post(`/api/user/logoutAll`, {}, header),
    createTask: (data, header) => axios.post(`/api/task`, data, header),
    updateTask: (id, data, header) => axios.patch(`/api/task/${id}`, data, header),
    deleteTask: (id, header) => axios.delete(`/api/task/${id}`, header),
    getTask: (id, header) => axios.get(`/api/task/${id}`, header),
    getTasks: (header) => axios.get(`/api/task`, header)
}