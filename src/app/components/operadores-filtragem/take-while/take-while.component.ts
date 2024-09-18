import { Component, OnInit } from '@angular/core';
import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
})
export class TakeWhileComponent implements OnInit{

  ngOnInit(): void {
    this.operatorTakeWhile();
  }

  operatorTakeWhile() {
    const interval$ = interval(1000);

    interval$
    .pipe(
      takeWhile(value => value <= 5)
    )
    .subscribe({
      next: resp => console.log('TakeWhile resp - ', resp),
      error: err => console.log('TakeWhile err - ', err),
      complete: () => console.log('TakeWhile complete')
    })

  }

}
