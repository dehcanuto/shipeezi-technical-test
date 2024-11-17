import { AxiosResponse } from 'axios';

import api from '../services/api';

export const handleListTasks = async () => {
  try {
    const response: AxiosResponse<any[]> = await api.get<any[]>('/tasks');
    return response.data;
  } catch (error) {
    console.error("Erro de autenticação", error);
    return null;
  }
};

export const handleCreateTask = async (data: any) => {
  try {
    const response: AxiosResponse<any[]> = await api.post<any[]>('/tasks', data);
    return response.data;
  } catch (error) {
    console.error("Erro de autenticação", error);
    return null;
  }
};