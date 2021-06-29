interface Login {
  username: string;
  password: string;
}

export interface LoginRequest extends Login {}

export interface LoginResponse {
  fullName:string
  accountNumber:string
}
