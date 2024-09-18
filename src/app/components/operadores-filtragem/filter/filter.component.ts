import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filter, from, Observable } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit{

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.operatorFilter();
  }



  operatorFilter() {
    const requisicaoArray$ = from([
      { "id": 1, "name": "Teste1", "email": "teste1@gmail.com"},
      { "id": 2, "name": "Teste2", "email": "teste2@gmail.com"},
      { "id": 3, "name": "Teste3", "email": "teste3@gmail.com"}
    ])

    requisicaoArray$
    .pipe(
      filter(el => el.name == 'Teste1')
    )
    .subscribe({
      next: resp => console.log('Filter resp - ', resp),
      error: err => console.log('Filter err - ', err)
    })

  }

}
