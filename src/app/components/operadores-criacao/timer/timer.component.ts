import { Component, OnInit } from '@angular/core';
import { concatMap, of, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
})
export class TimerComponent implements OnInit{

  ngOnInit(): void {
    this.operatorTimer();
  }

  operatorTimer() {
    const variableObservable = of(10, 'teste', true)

    timer(4000)
    .pipe(
      concatMap(() => variableObservable)
    )
    .subscribe(resp => console.log('Timer execution - ', resp))
  }

}
