import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, map, Observable } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
})
export class MapComponent implements OnInit{

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // this.operatorMap1();
    // this.operatorMap2();
    this.operatorMapRequisicao();
  }

  operatorMap1() {
    const variableArrayObs$ = from([
      { "id": 1, "name": "NomeTeste1" },
      { "id": 2, "name": "NomeTeste2" },
      { "id": 3, "name": "NomeTeste3" }
    ])

    const map1Variable = variableArrayObs$.pipe(
      map(({name}) => name)
    )

    map1Variable.subscribe({
      next: resp => console.log('Map1 resp - ', resp),
      error: err =>  console.log('Map1 error - ', err)
    })

  }

  operatorMap2() {
    const variableNumsObs$ = from([
      1, 2, 3, 4
    ])

    const map2Variable = variableNumsObs$.pipe(
      map(num => num + 2)
    )

    map2Variable.subscribe({
      next: resp => console.log('Map2 resp - ', resp),
      error: err =>  console.log('Map2 error - ', err)
    })
  }

  requisicao$(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1')
  }

  operatorMapRequisicao() {
    this.requisicao$()
    .pipe(
      map(el => `Title: "${el.title}"`)
    )
    .subscribe({
      next: resp => console.log('Map Requisicao resp - ', resp),
      error: err => console.log('Map Requisicao error - ', err)
    })
  }

}
