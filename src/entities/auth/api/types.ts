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
  token_type: string;
}

export interface KeycloakCallbackRequest {
  code: string;
}
