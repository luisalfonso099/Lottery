import { Action, createReducer,on} from '@ngrx/store'
import { calcularRango, refresh } from './store.rangos.actions'


export const initialState : Number[] = [];
const _calcularReducer = createReducer( initialState,
    on(calcularRango, (state, {value}) => [...state, ...value ]),
    on(refresh, ( state, {value})=>[...value])
  );


  export function rangosReducer(state: any, action: Action) {
    return _calcularReducer(state, action);
  }




  


