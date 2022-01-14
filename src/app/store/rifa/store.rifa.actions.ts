import { createAction, props } from '@ngrx/store';


export const winners = 
createAction('[Numeros-Ganadores] Ganador',
    props<{value:Number []}>()
);

export const refreshWiners = 
createAction('[RefreshWinners From LocalStorage] RefreshWinners',
    props<{value: any}>()
);
