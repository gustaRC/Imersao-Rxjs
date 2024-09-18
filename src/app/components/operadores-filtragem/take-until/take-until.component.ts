import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { fromEvent, interval, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
})
export class TakeUntilComponent implements AfterViewInit{

  @ViewChild('htmlBtn') btn !: ElementRef;

  ngAfterViewInit(): void {
    // this.operatorTakeUntilTimer();
    this.operatorTakeUntilClick();
  }

  operatorTakeUntilTimer() {
    const interval$ = interval(1000);
    const timer$ = timer(8000);

    interval$
    .pipe(
      takeUntil(timer$)
    )
    .subscribe({
      next: resp => console.log('TakeUntil resp - ', resp),
      error: err => console.log('TakeUntil err - ', err)
    })

  }

  operatorTakeUntilClick() {
    const interval$ = interval(1000);
    const click$ = fromEvent(this.btn.nativeElement, 'click');

    interval$
    .pipe(
      takeUntil(click$)
    )
    .subscribe({
      next: resp => console.log('TakeUntil resp - ', resp),
      error: err => console.log('TakeUntil err - ', err)
    })
  }

  completado(): void {
    console.log('Botão clicado = Intervalo parado')
  }

}
