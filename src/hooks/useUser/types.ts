import { JwtPayload } from "jwt-decode";

export interface UserCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface CustomTokenPayload extends JwtPayload {
  id: string;
  username: string;
}

export interface RegisterCredentials {
  username: string;
  password: string;
  email: string;
}
