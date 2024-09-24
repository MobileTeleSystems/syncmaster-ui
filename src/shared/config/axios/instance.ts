import axios from 'axios';

import { requestInterceptor, responseSuccessInterceptor } from './interceptors';

export const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use(requestInterceptor);

axios.interceptors.response.use(responseSuccessInterceptor);
