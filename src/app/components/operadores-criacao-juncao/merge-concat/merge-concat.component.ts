import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { concat, interval, merge, Observable } from 'rxjs';

@Component({
  selector: 'app-merge-concat',
  templateUrl: './merge-concat.component.html',
})
export class MergeConcatComponent implements OnInit{

  requisicao1: Observable<any>;
  requisicao2: Observable<any>;
  intervalObs: Observable<number>;

  constructor(
    private http: HttpClient
  ) {
    this.requisicao1 = this.http.get('http://localhost:3000/users')
    this.requisicao2 = this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    this.intervalObs = interval(1000)
  }

  ngOnInit(): void {
    this.operatorMerge();
    this.operatorConcat();
  }

  operatorMerge() {
    const variableMerge = merge(this.intervalObs, this.requisicao1, this.requisicao2);

    variableMerge.subscribe({
      next: resp => console.log('Merge resp - ', resp),
      error: err => console.log('Merge error - ', err)
    })
  }

  operatorConcat() {
    const variableConcat = concat(this.intervalObs, this.requisicao1, this.requisicao2);

    variableConcat.subscribe({
      next: resp => console.log('Concat resp - ', resp),
      error: err => console.log('Concat error - ', err)
    })
  }

}
