import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, share } from 'rxjs';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
})
export class ShareComponent implements OnInit{

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.operatorShare();
  }

  operatorShare() {
    const requisicao$ = this.http.get('http://localhost:3000/users')
                      .pipe(
                        share()
                      )

    const obs1$ = requisicao$.pipe(
      map((resp: any) =>
        resp.filter(
          (el:any) => el.name == "Teste1"
        )
      )
    )

    const obs2$ = requisicao$.pipe(
      map((resp: any) =>
        resp.filter(
          (el:any) => el.name == "Teste2"
        )
      )
    )

    const obs3$ = requisicao$.pipe(
      map((resp: any) =>
        resp.filter(
          (el:any) => el.name == "Teste3"
        )
      )
    )

    obs1$.subscribe({
      next: resp => console.log('Share1 resp - ', resp),
      error: err => console.log('Share1 err - ', err),
    })

    obs2$.subscribe({
      next: resp => console.log('Share2 resp - ', resp),
      error: err => console.log('Share2 err - ', err),
    })

    obs3$.subscribe({
      next: resp => console.log('Share3 resp - ', resp),
      error: err => console.log('Share3 err - ', err),
    })
  }

}
