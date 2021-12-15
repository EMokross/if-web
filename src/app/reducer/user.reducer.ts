import { User } from './../entities/user';
import { createReducer, on, Action } from "@ngrx/store";
import * as UserActions from '../actions/user.actions'

const defaultState: User = {
    id: '',
    username: '',
    email: ''
}

export const authStateReducer = createReducer(
    defaultState,
    on(UserActions.update, (state, user) => user),
    on(UserActions.reset, (state) => defaultState)
);