import { User } from './../entities/user';
import { AuthState } from './../entities/auth-state';
import { hydrationMetaReducerFactory } from './hdyration/hydration.reducer';
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { authReducer } from "./auth/auth.reducer";
import { userReducer } from "./user/user.reducer";

export interface RootState {
  auth: AuthState,
  user: User
}

export const reducers: ActionReducerMap<RootState> = {
  auth: authReducer,
  user: userReducer
}