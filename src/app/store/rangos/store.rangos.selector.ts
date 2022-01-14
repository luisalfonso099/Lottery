import { createFeatureSelector,createSelector} from '@ngrx/store'

const rangos = createFeatureSelector('rangos')
  

export const rangosSelector = createSelector(rangos, (state: any) => state)

