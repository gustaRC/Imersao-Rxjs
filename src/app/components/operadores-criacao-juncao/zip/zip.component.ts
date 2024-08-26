import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { zip } from 'rxjs';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
})
export class ZipComponent implements OnInit{

  constructor(
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    // this.operatorZip1();
    this.operatorZip2();
  }

  operatorZip1() {
    const zipRequisicoes1$ = [
      this.httpClient.get('http://localhost:3000/users'),
      this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1')
    ]

    zip(zipRequisicoes1$).subscribe({
      next: resp => console.log('Zip resp - ', resp),
      error: err => console.error('Zip error - ', err)
    })
  }

  operatorZip2() {
    const zipRequisicoes2$ = zip(
      this.httpClient.get('http://localhost:3000/users'),
      this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1')
    )

    zipRequisicoes2$.subscribe({
      next: resp => console.log('Zip resp - ', resp),
      error: err => console.error('Zip error - ', err)
    })
  }

}
