import { AxiosResponse } from 'axios';

import api from '../services/api';
import { UsersListResponse } from '../models/user';
import { FieldValues } from 'react-hook-form';

export const handleListUsers = async () => {
  try {
    const response: AxiosResponse<UsersListResponse[]> = await api.get<UsersListResponse[]>('/users');
    return response.data;
  } catch (error) {
    console.error("Erro de autenticação", error);
    return null;
  }
};

export const handleGetUser = async (id: string) => {
  try {
    const response: AxiosResponse<UsersListResponse> = await api.get<UsersListResponse>(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro de autenticação", error);
    return null;
  }
};

export const handleCreateUser = async (data: FieldValues) => {
  try {
    const response: AxiosResponse<UsersListResponse> = await api.post<UsersListResponse>('/users', data);
    return response.data;
  } catch (error) {
    console.error("Erro de autenticação", error);
    return null;
  }
};

export const handleUpdateUser = async (id: string, data: FieldValues) => {
  try {
    const response: AxiosResponse<UsersListResponse> = await api.patch<UsersListResponse>(`/users/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Erro de autenticação", error);
    return null;
  }
};

export const handleDeleteUser = async (id: string) => {
  try {
    const response: AxiosResponse<UsersListResponse> = await api.delete<UsersListResponse>(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro de autenticação", error);
    return null;
  }
};