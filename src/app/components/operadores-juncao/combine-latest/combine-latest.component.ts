import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { combineLatest, interval, of, take } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
})
export class CombineLatestComponent implements OnInit{

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.operatorCombineLatest();
  }

  operatorCombineLatest() {
    const requisicao1$ = interval(1000).pipe(take(5));
    const requisicao2$ = this.http.get('http://localhost:3000/users');
    const requisicao3$ = of(10, 20, 30, 40);

    const variableCombineLatest$ = combineLatest([
      requisicao1$,
      requisicao2$,
      requisicao3$
    ])

    variableCombineLatest$.subscribe({
      next: resp => console.log('CombineLatest resp - ', resp),
      error: err => console.log('CombineLatest err - ', err),
    })
  }

}
