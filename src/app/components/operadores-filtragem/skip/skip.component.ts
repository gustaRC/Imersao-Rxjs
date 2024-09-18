import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, map, of, skip } from 'rxjs';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
})
export class SkipComponent implements AfterViewInit{

  @ViewChild('btnSkip') btnHtml !: ElementRef;

  ngAfterViewInit(): void {
    this.operatorSkip();
  }

  operatorSkip() {
    fromEvent(this.btnHtml.nativeElement, 'click')
      .pipe(
        skip(2)
      )
      .subscribe({
        next: resp => console.log('Skip resp - ', resp),
        error: err => console.log('Skip err - ', err),
      })
  }

}
