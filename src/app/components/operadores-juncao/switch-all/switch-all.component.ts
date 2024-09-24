import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, map, switchAll, tap } from 'rxjs';

@Component({
  selector: 'app-switch-all',
  templateUrl: './switch-all.component.html',
})
export class SwitchAllComponent implements OnInit{

  ngOnInit(): void {
    this.operatorSwitchAll();
  }

  operatorSwitchAll() {
    const click = fromEvent(document, 'click');

    click
    .pipe(
      tap(() => console.log('CLICADO')),
      map(() => interval(1000)),
      switchAll()
    )
    .subscribe({
      next: resp => console.log('SwitchAll resp - ', resp),
      error: err => console.log('SwitchAll err - ', err),
    })

  }

}
