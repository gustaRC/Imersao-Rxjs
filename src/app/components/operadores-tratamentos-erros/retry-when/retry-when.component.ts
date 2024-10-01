import { Component, OnInit } from '@angular/core';
import { delayWhen, interval, map, retryWhen, tap, timer } from 'rxjs';

@Component({
  selector: 'app-retry-when',
  templateUrl: './retry-when.component.html'
})
export class RetryWhenComponent implements OnInit{

  ngOnInit(): void {
    this.operatorRetry();
  }

  operatorRetry() {
    const interval$ = interval(1000)

    interval$
    .pipe(
      map(resp => {
        if(resp > 5) {
          throw resp;
        }
        return resp;
      }),
      retryWhen(err => (
        err.pipe(
          tap(el => console.log(`Erro ${el}`)),
          delayWhen(val => timer(3000))
        )
      ))
    )
    .subscribe({
      next: resp => console.log('RetryWhen resp - ', resp),
      error: err => console.log('RetryWhen err - ', err)
    })


  }
}
