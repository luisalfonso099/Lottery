import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { RangosComponent } from './rangos/rangos.component'
import { RifaComponent } from './rifa/rifa.component'

const routes: Routes = [
    {
        path: '',
        component: RangosComponent,
        pathMatch: 'full'
    },
    {
        path: 'rifa',
        component: RifaComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }
]


@NgModule({
    imports : [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}