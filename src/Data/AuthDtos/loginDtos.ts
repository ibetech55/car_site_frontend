export interface LoginDto {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  login_token: string;
  auth_token: string;
}

export interface LoginFormDto {
  password: string;
  email: string;
}
