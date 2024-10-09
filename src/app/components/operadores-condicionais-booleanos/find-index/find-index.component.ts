import { Component, OnInit } from '@angular/core';
import { findIndex, of } from 'rxjs';

@Component({
  selector: 'app-find-index',
  templateUrl: './find-index.component.html',
})
export class FindIndexComponent implements OnInit{

  ngOnInit(): void {
    this.operatorFindIndex();
  }

  operatorFindIndex() {
    const variableOf$ = of(1, 10, 100, 1000);

    variableOf$
    .pipe(
      findIndex(el => el < 50 && el > 8)
    )
    .subscribe({
      next: resp => console.log('FindIndex resp - ', resp),
      error: err => console.log('FindIndex err - ', err)
    })

  }

}
