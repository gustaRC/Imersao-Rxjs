import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { fromEvent, interval, mapTo } from 'rxjs';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
})
export class MapToComponent implements OnInit{

  ngOnInit(): void {
    // this.operatorMapTo();
    this.operatorMapToInterval();
  }

  operatorMapTo() {
    const clickDoc = fromEvent(document, 'click')

    clickDoc.pipe(
      mapTo(() => 'Botão clicado - De fato está funcionando!')
    )
    .subscribe({
      next: resp => console.log('MapTo resp - ', resp),
      error: err => console.log('MapTo error - ', err)
    })
  }

  operatorMapToInterval() {
    const interval$ = interval(1000)

    interval$.pipe(
      mapTo(() => `Efetuado um novo número`)
    )
    .subscribe({
      next: resp => console.log('MapTo resp - ', resp),
      error: err => console.log('MapTo error - ', err)
    })
  }

}
