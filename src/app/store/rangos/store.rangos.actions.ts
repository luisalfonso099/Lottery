import { createAction, props } from '@ngrx/store';

export const calcularRango = 
createAction('[CalcularRango] Rango',
    props<{value:Number []}>()
);


export const refresh = 
createAction('[Refresh From LocalStorage] Refresh',
    props<{value: any}>()
);
