import axios from "axios";
import { getToken } from './auth';

const api = axios.create({
  baseURL: 'http://localhost:8080/' // process.env.APP_API_URL,
});

api.interceptors.request.use(
  async (config) => {
    const sessionToken = getToken();
    if (sessionToken) config.headers!.Authorization =  `Bearer ${sessionToken}`
    return config
  },
  (error) => {
    Promise.reject(error)
    console.log('error api', error)
    return error.data.message
  }
)

export default api;