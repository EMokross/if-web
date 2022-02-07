import { NzModalModule } from 'ng-zorro-antd/modal';
import { User } from './../user';

export interface LoginBody {
    name: string,
    password: string
}

export interface LoginResponse {
    accessToken: string,
    refreshToken: string,
    user: User
}
