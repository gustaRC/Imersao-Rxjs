import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
})
export class FromComponent implements OnInit{

  ngOnInit(): void {
    // this.operatorFromArray();
    // this.operatorFromPromise();
    // this.operatorFromString();
  }

  operatorFromArray() {
    const fromVariableArray$ = from([1, 2, 3, 4, 5])

    fromVariableArray$.subscribe({
      next: resp => console.log('From Array - ', resp) //~ items sequenciais
    })
  }

  operatorFromPromise() {
    const fromVariablePromise$ = from(new Promise(
      resolve => resolve("Promise Testada!")
    ))

    fromVariablePromise$.subscribe({
      next: resp => console.log('From Promisse - ', resp)
    })
  }

  operatorFromString() {
    const fromVariableString$ = from('from emitindo uma string')

    fromVariableString$.subscribe({
      next: resp => console.log('From String - ', resp) //~ caracteres separados
    })
  }

}
