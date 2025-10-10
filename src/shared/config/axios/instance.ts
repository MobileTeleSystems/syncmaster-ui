import axios from 'axios';

import { requestInterceptor, responseErrorInterceptor, responseSuccessInterceptor } from './interceptors';

export const axiosInstance = axios.create({
  baseURL: window.env?.API_URL || process.env.API_URL || 'http://localhost:8000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(requestInterceptor);

axiosInstance.interceptors.response.use(responseSuccessInterceptor, responseErrorInterceptor);
