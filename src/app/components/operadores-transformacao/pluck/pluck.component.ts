import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, pluck } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
})
export class PluckComponent implements OnInit{

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.operatorPluck();
  }

  operatorPluck() {
    const requisicao$ = this.http.get('http://localhost:3000/users');

    requisicao$
    .pipe(
      pluck('name')
    )
    .subscribe({
      next: resp => console.log('Pluck resp - ', resp),
      error: err => console.log('Pluck err - ', err)
    })

  }

}
