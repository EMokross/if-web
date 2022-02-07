import { User } from '../../entities/user';
import { createReducer, on, Action } from "@ngrx/store";
import * as UserActions from './user.actions'

const defaultState: User = {
    _id: '',
    name: ''
}

export const userReducer = createReducer(
    defaultState,
    on(UserActions.update, (state, user) => user),
    on(UserActions.reset, (state) => defaultState)
);