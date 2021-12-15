import { createAction, props } from "@ngrx/store";
import { AuthState } from "../entities/auth-state";

export const update = createAction('[Auth] Update', props<AuthState>());
export const reset = createAction('[Auth] Logout');