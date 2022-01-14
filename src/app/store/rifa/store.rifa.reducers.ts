import { Action, createReducer,on} from '@ngrx/store'
import { refreshWiners, winners } from './store.rifa.actions'


export const initialState : Number[] = [];
const _rifa = createReducer( initialState,
    on(winners, (state, {value}) => [...state, ...value ]),
    on(refreshWiners, ( state, {value})=>[...value])
  );


  export function rifaReducer(state: any, action: Action) {
    return _rifa(state, action);
  }




  


