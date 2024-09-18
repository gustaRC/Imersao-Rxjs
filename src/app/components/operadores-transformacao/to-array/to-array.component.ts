import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
})
export class ToArrayComponent implements OnInit{

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.operatorSemToArray();
    this.operatorComToArray();
  }

  operatorSemToArray() {
    const requisicao$ = this.http.get('http://localhost:3000/userEmail')

    requisicao$.subscribe({
      next: resp => console.log('Sem ToArray resp - ', resp),
      error: err => console.log('Sem ToArray err - ', err),
    })
  }

  operatorComToArray() {
    const requisicao$ = this.http.get('http://localhost:3000/userEmail')

    requisicao$
    .pipe(
      toArray()
    )
    .subscribe({
      next: resp => console.log('Com ToArray resp - ', resp),
      error: err => console.log('Com ToArray err - ', err),
    })
  }

}
