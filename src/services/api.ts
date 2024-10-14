import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
});

export const login = async (username: string, password: string) => {
  const response = await api.post('/auth/login', { username, password });
  return response.data;
};

export const getStudents = async () => {
  const response = await api.get('/students');
  return response.data;
};

export const getCourses = async () => {
  const response = await api.get('/courses');
  return response.data;
};

export const createStudent = async (studentData: any) => {
  const response = await api.post('/students', studentData);
  return response.data;
};

export const createCourse = async (courseData: any) => {
  const response = await api.post('/courses', courseData);
  return response.data;
};

export default api;