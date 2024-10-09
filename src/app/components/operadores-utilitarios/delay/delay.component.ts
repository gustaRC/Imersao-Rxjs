import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, interval, switchMap, takeUntil, takeWhile, tap, timer } from 'rxjs';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
})
export class DelayComponent implements OnInit{

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.operatorDelay();
  }

  operatorDelay() {
    const requisicao$ = this.http.get<Array<{id: number, name: string, email: string}>>('http://localhost:3000/users');

    requisicao$
    .pipe(
      tap(el => console.log('Apos 4 segundos será ativado')),
      delay(4000)
    )
    .subscribe({
      next: resp => console.log('Delay resp - ', resp),
      error: err => console.log('Delay err - ', err)
    })

  }

}
