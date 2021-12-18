import { User } from '../user';

export interface UserCreateBody {
    username: string,
    password: string
}

export interface UserCreateResponse {
    accessToken: string,
    refreshToken: string,
    user: User
}

export interface UserGetParams {
    id: string
}
