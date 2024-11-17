import { AxiosResponse } from 'axios';

import api from '../services/api';
import { UsersListResponse } from '../models/user';

export const handleListUsers = async () => {
  try {
    const response: AxiosResponse<UsersListResponse[]> = await api.get<UsersListResponse[]>('/users');
    return response.data;
  } catch (error) {
    console.error("Erro de autenticação", error);
    return null;
  }
};