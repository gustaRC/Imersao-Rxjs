import { Component, OnInit } from '@angular/core';
import { of, startWith } from 'rxjs';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
})
export class StartWithComponent implements OnInit{

  ngOnInit(): void {
    this.operatorStartWith();
  }

  operatorStartWith() {
    const values$ = of(10, 20, 30, 40, 50)

    values$
    .pipe(
      startWith('Iniciando contagem...')
    )
    .subscribe({
      next: resp => console.log('StartWith resp - ', resp),
      error: err => console.log('StartWith err - ', err)
    })
  }

}
