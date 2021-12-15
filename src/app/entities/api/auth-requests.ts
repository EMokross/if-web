import { User } from './../user';

export interface LoginBody {
    username: string,
    password: string
}

export interface LoginResponse {
    accessToken: string,
    refreshToken: string,
    user: User
}
