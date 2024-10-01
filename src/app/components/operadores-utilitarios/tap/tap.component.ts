import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html'
})
export class TapComponent implements OnInit{

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.operatorTap();
  }

  operatorTap() {
    const requisicao$ = this.http.get<Array<{id: number, name: string, email: string}>>('http://localhost:3000/users');

    requisicao$
    .pipe(
      tap(resp => resp.forEach(el => console.log(`ID identificado ${el.id}`)))
    )
    .subscribe({
      next: resp => console.log('Tap resp - ', resp),
      error: err => console.log('Tap err - ', err)
    })
  }

}
