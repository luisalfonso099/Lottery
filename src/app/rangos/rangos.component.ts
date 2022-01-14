import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {Store} from '@ngrx/store'
import { calcularRango, refresh } from "../store/rangos/store.rangos.actions";
import { rangosSelector } from "../store/rangos/store.rangos.selector";
import { filter } from "rxjs";

@Component({
    selector: 'app-rangos',
    templateUrl: './rangos.component.html',
    styles: ['.range{height:60vh}']
})
export class RangosComponent implements OnInit {
  
    formValues: FormGroup = this.fb.group({
       start: [,[Validators.required]],
       end: [,[Validators.required]],
   })

   valuesLS: any = () => { 
            return localStorage.getItem('valuesSelected') == null
            ? []  
            : localStorage.getItem('valuesSelected')?.split(',').map(n => Number(n))
        }

      valuesSelected : any [] = []
      error: string = ""

   constructor(private fb: FormBuilder, private store: Store){  }
   ngOnInit():void {
      console.log(this.valuesSelected);
      
        this.store.select(rangosSelector)
        .pipe(filter( 
                    value =>  value.length && !this.valuesSelected.includes(this.formValues.value.start)
               ))
        .subscribe(value =>{   
                    this.valuesSelected = value
                  })
                  this.store.dispatch(refresh({value: this.valuesLS()}))
     }

    range = (start:any, stop:any, step:any) =>Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    save = ()=>{
         
         const isRange = this.range( this.formValues.value.start , this.formValues.value.end , 1 )
         const numberRepete = isRange
            .filter(( items )=> this.valuesSelected.includes(items))

         const isIncludes = this.valuesSelected.some(val =>  isRange.includes(val))
         
         if( numberRepete.length > 0 && isIncludes){
            this.error = `No puedes incluir ${numberRepete}, ya esta/n seleccionado`
            this.formValues.reset()
            return
         }
         if(this.formValues.value.start > this.formValues.value.end){
            this.error = 
            `Numero hasta "${this.formValues.value.end}" debe ser mayor numero desde "${this.formValues.value.start}"`
            this.formValues.reset()
            return
         }
         const result: Number[] = this.range( this.formValues.value.start , this.formValues.value.end , 1 )
        

         localStorage.setItem('valuesSelected', this.valuesSelected.concat(result).join())
         this.store.dispatch(calcularRango({value : result}))
         this.formValues.reset()
         this.error = ""
      console.log(this.valuesSelected);


   }
   isValid = (campo:string) =>{
     return this.formValues.controls[campo].errors 
        && this.formValues.controls[campo].touched
   }
}


