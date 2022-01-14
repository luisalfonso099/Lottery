import { createFeatureSelector,createSelector} from '@ngrx/store'

const rangos = createFeatureSelector('rifa')
  

export const rifaSelector = createSelector(rangos, (state: any) => state)

