import { Storage } from '@shared/constants';

export const isAuthenticated = () => !!localStorage.getItem(Storage.ACCESS_TOKEN);
