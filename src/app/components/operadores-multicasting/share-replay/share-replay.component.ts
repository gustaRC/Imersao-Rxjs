import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, shareReplay, filter } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
})
export class ShareReplayComponent implements OnInit{

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.operatorShareReplay();
  }

  operatorShareReplay() {
    const requisicao$ = this.http.get('http://localhost:3000/users')
                      .pipe(
                        shareReplay(1)
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
      next: resp => console.log('ShareReplay1 resp - ', resp),
      error: err => console.log('ShareReplay1 err - ', err),
    })

    obs2$.subscribe({
      next: resp => console.log('ShareReplay2 resp - ', resp),
      error: err => console.log('ShareReplay2 err - ', err),
    })

    obs3$.subscribe({
      next: resp => console.log('ShareReplay3 resp - ', resp),
      error: err => console.log('ShareReplay3 err - ', err),
    })

  }

}
