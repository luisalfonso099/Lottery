import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangosComponent } from './rangos.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RangosComponent,
  ],
  imports: [
     ReactiveFormsModule,
     CommonModule,
  ],
  exports: [
    RangosComponent
  ]
})
export class RangosModule { }
