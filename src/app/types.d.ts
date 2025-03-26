export interface blackSection{
  name: string;
  data: string;
}

export interface User{
  email: string;
  password: string;
}

export interface ServerResponse{
  status: number;
  message: string;
  user?: User;
}
