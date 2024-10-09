import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, of, timeout } from 'rxjs';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
})
export class TimeoutComponent implements OnInit{

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.operatorTimeout();
  }

  operatorTimeout() {
    const requisicao$ = this.http.get<Array<{id: number, name: string, email: string}>>('http://localhost:3000/users');

    requisicao$
    .pipe(
      timeout(3000),
      catchError(err => of('Após 3 segundos será lançado erro - ', err))
    )
    .subscribe({
      next: resp => console.log('Timeout resp - ', resp),
      error: err => console.log('Timeout err - ', err),
    })

  }

}
