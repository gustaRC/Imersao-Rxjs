import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html'
})
export class DebounceTimeComponent implements AfterViewInit{

  @ViewChild('inputDebounceTime') inputHtml!: ElementRef;

  constructor(
    private http: HttpClient
  ) {}

  ngAfterViewInit(): void {
    this.operatorDebounceTime();
  }

  operatorDebounceTime() {
    const inputSearch = fromEvent(this.inputHtml.nativeElement, 'keyup');

    inputSearch
    .pipe(
      debounceTime(1000),
      map((ev: any) => ev.target.value),
      switchMap((val: any) => this.http.get(`http://localhost:3000/users?name=${val}`))
    )
    .subscribe({
      next: resp => console.log('DebounceTime resp - ', resp),
      error: err => console.log('DebounceTime err - ', err)
    })

  }

}
