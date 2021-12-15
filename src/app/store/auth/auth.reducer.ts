import { createReducer, on, Action } from "@ngrx/store";
import * as AuthActions from './auth.actions'
import { AuthState } from "../../entities/auth-state";

const defaultState: AuthState = {
    isLogged: false,
    userId: '',
    refreshToken: '',
    accessToken: ''
}

export const authReducer = createReducer(
    defaultState,
    on(AuthActions.update, (state, authState) => authState),
    on(AuthActions.reset, (state) => defaultState)
);