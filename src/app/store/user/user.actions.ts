import { User } from '../../entities/user';
import { createAction, props } from "@ngrx/store";

export const update = createAction('[User] Update', props<User>());
export const reset = createAction('[User] Logout');