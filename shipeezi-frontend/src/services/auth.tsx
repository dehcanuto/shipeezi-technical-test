import { AxiosResponse } from 'axios';
import api from './api';

import { LoginCredentials } from '../models/auth';
import { UserInfos } from '../models/user';
import { LoginResponse } from '../context/AuthContext';

export const handleLogin = async ({ email, password }: LoginCredentials) => {
  try {
    const response: AxiosResponse<LoginResponse> = await api.post<LoginResponse>('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    console.error("Erro de autenticação", error);
    return null;
  }
};

export const handleRegister = async (data: UserInfos) => {
  try {
    const response = await api.post('/auth/register', data);
    return response;
  } catch (error) {
    console.error("Erro de autenticação", error);
    return null;
  }
};

export const isAuthenticated = () => !!localStorage.getItem('access_token');

export const getToken = () => localStorage.getItem('access_token');