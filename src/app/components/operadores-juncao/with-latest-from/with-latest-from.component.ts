import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
})
export class WithLatestFromComponent implements OnInit{

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.operatorWithLatestFrom();
  }

  operatorWithLatestFrom() {
    const click$ = fromEvent(document, 'click');
    const timer$ = interval(1000);
    const requisicaoHttp$ =  this.http.get('http://localhost:3000/users')

    click$
    .pipe (
      withLatestFrom(timer$, requisicaoHttp$)
    )
    .subscribe({
      next: resp => console.log('WithLatestFrom resp - ', resp),
      error: err => console.log('WithLatestFrom err - ', err),
    })
  }

}
