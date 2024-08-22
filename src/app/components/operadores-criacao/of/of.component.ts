import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
})
export class OfComponent implements OnInit{

  ngOnInit(): void {
    // this.operatorOfArray();
    // this.operatorOfString();
    this.operatorOfMultValues();
  }

  operatorOfArray() {
    const ofVariableArray$ = of([1, 2, 3, 4, 5])

    ofVariableArray$.subscribe({
      next: resp => console.log('Of Array - ', resp) //~ valores únicos
    })
  }

  operatorOfString() {
    const ofVariableString$ = of('of emitindo uma string')

    ofVariableString$.subscribe({
      next: resp => console.log('Of String - ', resp) //~ valores únicos
    })
  }

  operatorOfMultValues() {
    const ofVariableString$ = of(
      1,
      2,
      {nome: 'Gustavo', idade: 19},
      'of com string',
      false,
      [10, 20, 30, 'uhu']
    )

    ofVariableString$.subscribe({
      next: resp => console.log('Of Multiple Values - ', resp) //~ valores únicos
    })
  }

}
