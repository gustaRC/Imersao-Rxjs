import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, of, retry } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
})
export class RetryComponent implements OnInit{

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.operatorRetry();
  }

  operatorRetry() {
    const obsError$ = this.http.get('url qualquer, só para dar error')

    obsError$
    .pipe(
      retry(4),
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
