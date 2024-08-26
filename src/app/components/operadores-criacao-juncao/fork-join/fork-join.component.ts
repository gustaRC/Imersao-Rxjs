import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, throwError } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
})
export class ForkJoinComponent implements OnInit{

  constructor(
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    // this.operatorForkJoinObjeto();
    this.operatorForkJoinArray();
    // this.operatorForkJoinErro();
  }

  operatorForkJoinErro() {
    const variableForkJoinErro$ = forkJoin({
      requisicao1: this.httpClient.get('http://localhost:3000/users'),
      requisicao2: this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1'),
      errorSimulacao: throwError('Simulado erro no FORKJOIN')
    })

    variableForkJoinErro$.subscribe({
      next: resp => console.log('Simulação de erro. NÃO caira no next!'),
      error: err => console.error('ForkJoin com simulando ERRO - ', err)
    })
  }

  operatorForkJoinObjeto() {
    const variableForkJoinObjeto$ = forkJoin({
      requisicao1: this.httpClient.get('http://localhost:3000/users'),
      requisicao2: this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1')
    })

    variableForkJoinObjeto$.subscribe({
      next: resp => console.log('ForkJoin com Objeto resp - ', resp),
      error: err => console.error('ForkJoin com Objeto error - ', err)
    })
  }

  operatorForkJoinArray() {
    const variableForkJoinArray$ = forkJoin([
      this.httpClient.get('http://localhost:3000/users'),
      this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1')
    ])

    variableForkJoinArray$.subscribe({
      next: resp => console.log('ForJoin com Array resp - ', resp),
      error: err => console.log('ForkJoin com Array error - ', err)
    })
  }
}
