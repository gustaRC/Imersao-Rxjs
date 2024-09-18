import { Component, OnInit } from '@angular/core';
import { from, map, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
})
export class TakeComponent implements OnInit{

  ngOnInit(): void {
    this.operatorTake();
  }

  operatorTake() {
    const arrayObj$ = from([
      { "id": 1, "name": "Teste1", "email": "teste1@gmail.com"},
      { "id": 2, "name": "Teste2", "email": "teste2@gmail.com"},
      { "id": 3, "name": "Teste3", "email": "teste3@gmail.com"}
    ])

    arrayObj$
    .pipe(
      map(res => res.name),
      take(1)
    )
    .subscribe({
      next: resp => console.log('Take resp - ', resp),
      error: err => console.log('Take err - ', err),
    })

  }

}
