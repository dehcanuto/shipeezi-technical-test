import { AxiosResponse } from 'axios';

import api from './api';

export const handleListTasks = async () => {
  try {
    const response: AxiosResponse<any[]> = await api.get<any[]>('/tasks');
    return response.data;
  } catch (error) {
    console.error("Erro de autenticação", error);
    return null;
  }
};