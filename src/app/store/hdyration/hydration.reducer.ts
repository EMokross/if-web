import { SsrService } from './../../service/ssr.service';
import { ActionReducer, INIT, MetaReducer, UPDATE } from "@ngrx/store";
import { RootState } from '../index';

export function hydrationMetaReducerFactory(ssr: SsrService): MetaReducer<RootState> {
  return (reducer: ActionReducer<RootState>): ActionReducer<RootState> => {
    return (state, action) => {

      console.log(action.type)
      if ((action.type === INIT || action.type === UPDATE) && ssr.isBrowser) {
        const storageValue = localStorage.getItem("state");
  
        if (storageValue) {
          try {
            return JSON.parse(storageValue);
          } catch {
            localStorage.removeItem("state");
          }
        }
      }
      const nextState = reducer(state, action);
      
      if (ssr.isBrowser)
        localStorage.setItem("state", JSON.stringify(nextState));
  
      return nextState;
    };
  }
}
