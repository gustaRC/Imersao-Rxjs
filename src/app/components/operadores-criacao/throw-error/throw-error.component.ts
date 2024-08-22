import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
})
export class ThrowErrorComponent implements OnInit{

  ngOnInit(): void {
    this.operatorThrowError();
  }

  operatorThrowError() {
    const variableThrowError = throwError("Emição de erro com throwError!")

    variableThrowError.subscribe(
      resp => console.log('Não cairá aqui, pois estamos emitindo um ERRO! '),
      error => {
        console.log('ThrowError execution - ', error)
        console.error('ThrowError execution - ', error)
      },
      () => console.log('Teste throwError concluído!')
    )
  }

}
