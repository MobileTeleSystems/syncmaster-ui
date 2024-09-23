import { Storage } from '@shared/types';

export const isAuthenticated = () => !!localStorage.getItem(Storage.ACCESS_TOKEN);
