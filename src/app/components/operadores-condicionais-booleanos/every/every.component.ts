import { Component, OnInit } from '@angular/core';
import { every, of, tap } from 'rxjs';

@Component({
  selector: 'app-every',
  templateUrl: './every.component.html',
})
export class EveryComponent implements OnInit{

  ngOnInit(): void {
    this.operatorEvery();
  }

  operatorEvery() {
    const variableOf$ = of(1, 10, 100, 1000);

    variableOf$
    .pipe(
      tap(el => el < 10000 && console.log('Todos os números são menores que 10.000')),
      every(el => el < 10000)
    )
    .subscribe({
      next: resp => console.log('Every resp - ', resp),
      error: err => console.log('Every err - ', err)
    })

  }

}
