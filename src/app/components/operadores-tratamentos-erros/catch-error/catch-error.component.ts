import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
})
export class CatchErrorComponent implements OnInit{

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.operatorCatchError();
  }

  operatorCatchError() {
    const obsError$ = this.http.get('url qualquer, só para dar error')

    obsError$
    .pipe(
      catchError((error: any) => {
        throw error.status == 404 ? of('Não encontrado URL') : of('Erro não identificado no servidor');
      })
    )
    .subscribe({
      next: resp => console.log('CatchError resp - ', resp),
      error: err => console.log('CatchError err - ', err),
    })

  }

}
