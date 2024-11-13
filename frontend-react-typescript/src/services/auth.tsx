import api from './api';
import { LoginCredentials } from '../models/auth';

export const handleLogin = async ({ email, password }: LoginCredentials) => {
  try {
    const response = await api.post('/login', { email, password });
    if (response.data.token) localStorage.setItem('token', response.data.token);
    return response;
  } catch (error) {
    console.error("Erro de autenticação", error);
    return null;
  }
};

export const isAuthenticated = () => !!localStorage.getItem('token');

export const getToken = () => localStorage.getItem('token');