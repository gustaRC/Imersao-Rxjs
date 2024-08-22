import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
})
export class IntervalComponent implements OnInit{

  ngOnInit(): void {
    this.operatorInterval();
  }

  operatorInterval() {
    const variableInterval = interval(1000);

    const intervalSubscripition = variableInterval.subscribe(resp => console.log('Interval execution - ', resp))

    setTimeout(() => {
      intervalSubscripition.unsubscribe()
    }, 5000);
  }

}
