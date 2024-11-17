import { AxiosResponse } from 'axios';

import api from '../services/api';

export const handleListComments = async () => {
  try {
    const response: AxiosResponse<any[]> = await api.get<any[]>('/comments');
    return response.data;
  } catch (error) {
    console.error("Erro de autenticação", error);
    return null;
  }
};

export const handleCreateComment = async (data: { comment: string; taskId: number; }) => {
  try {
    const response: AxiosResponse<any[]> = await api.post<any[]>('/comments', data);
    return response.data;
  } catch (error) {
    console.error("Erro de autenticação", error);
    return null;
  }
};