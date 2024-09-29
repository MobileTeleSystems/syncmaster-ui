import axios from 'axios';

import { requestInterceptor, responseSuccessInterceptor } from './interceptors';

export const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(requestInterceptor);

axiosInstance.interceptors.response.use(responseSuccessInterceptor);
