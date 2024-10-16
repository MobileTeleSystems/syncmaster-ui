export interface AuthUser {
  id: number;
  username: string;
  is_superuser: boolean;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
}
