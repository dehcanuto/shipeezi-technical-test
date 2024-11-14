import api from './api';

import { LoginCredentials } from '../models/auth';
import { UserInfos } from '../models/user';

export const handleLogin = async ({ email, password }: LoginCredentials) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    if (response.data.access_token) localStorage.setItem('access_token', response.data.access_token);
    return response;
  } catch (error) {
    console.error("Erro de autenticação", error);
    return null;
  }
};

export const handleRegister = async (data: UserInfos) => {
  try {
    const response = await api.post('/auth/register', data);
    console.log('handleRegister', response);
    return response;
  } catch (error) {
    console.error("Erro de autenticação", error);
    return null;
  }
};

export const isAuthenticated = () => !!localStorage.getItem('access_token');

export const getToken = () => localStorage.getItem('access_token');