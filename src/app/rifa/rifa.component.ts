import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { refresh } from '../store/rangos/store.rangos.actions';
import { rangosSelector } from '../store/rangos/store.rangos.selector';
import { refreshWiners, winners } from '../store/rifa/store.rifa.actions';
import { rifaSelector } from '../store/rifa/store.rifa.selector';

@Component({
  selector: 'app-rifa',
  templateUrl: './rifa.component.html',
  styles: ['.rifa {height: 89vh}']
})
export class RifaComponent implements OnInit {

  valuesSelect: any[] = []
  valoresStorage: any = (key: string) => { 
    return localStorage.getItem(key) == undefined
    ? [ ]  
    : localStorage.getItem(key)?.split(',').map(n=>Number(n))
    }

  constructor( private store: Store ){  }
  
   winnerNumber: Number []= [] ;
  ngOnInit(): void {
    
    this.store.select(rangosSelector)
    .subscribe(valor =>{      
      this.valuesSelect = valor
    })
    this.store.select(rifaSelector)
    .subscribe(value =>{     
      this.winnerNumber = value
    })
    this.store.dispatch(refresh({value: this.valoresStorage('valuesSelected')}))
    this.store.dispatch(refreshWiners({value: this.valoresStorage('winnerNumber')}))

  }
 
 
  numRandom = ()=> Math.floor(Math.random() * (this.valuesSelect.length))+1
  
  lottery = ()=>{
     let num = this.numRandom()
     if(this.winnerNumber.length < this.valuesSelect.length){
     while (this.winnerNumber.includes(num) && this.winnerNumber.length < this.valuesSelect.length) {
       num = this.numRandom()
      }
      this.store.dispatch(winners({value:[num]}))
      localStorage.setItem('winnerNumber',  this.winnerNumber.join())
    }
    }      
}

