import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
})
export class FromEventComponent implements AfterViewInit{

  @ViewChild('buttonTeste') buttonClick !: ElementRef;

  ngAfterViewInit(): void {
    this.operatorFromEvent();
  }

  operatorFromEvent() {
    const variableFromEvent = fromEvent(this.buttonClick.nativeElement, 'click')

    variableFromEvent.subscribe(resp => console.log("FromEvent 'click' - ", resp))
  }

}
