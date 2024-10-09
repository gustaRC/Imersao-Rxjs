import { Component, OnInit } from '@angular/core';
import { find, of } from 'rxjs';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
})
export class FindComponent implements OnInit{

  ngOnInit(): void {
    this.operatorFind();
  }

  operatorFind() {
    const variableOf$ = of(1, 10, 100, 1000);

    variableOf$
    .pipe(
      find(el => el < 50)
    )
    .subscribe({
      next: resp => console.log('Find resp - ', resp),
      error: err => console.log('Find err - ', err)
    })


  }

}
