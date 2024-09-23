import { AxiosResponse } from 'axios';

export const responseSuccessInterceptor = (response: AxiosResponse) => response.data;
