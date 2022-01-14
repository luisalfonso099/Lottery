import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RangosModule } from './rangos/rangos.module';
import { RifaModule } from './rifa/rifa.module';
import { rangosReducer } from './store/rangos/store.rangos.reducers';
import {StoreModule} from '@ngrx/store'
import { rifaReducer } from './store/rifa/store.rifa.reducers';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],

  imports: [
    RifaModule,
    RangosModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      { 
        rangos: rangosReducer,
        rifa: rifaReducer
      }
      ),
    StoreDevtoolsModule.instrument({
    maxAge: 25, 
    logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
