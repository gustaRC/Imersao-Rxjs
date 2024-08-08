import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit{

  ngOnInit(): void {
    this.initObservable();
  }

  initObservable() {
    const variavelObservable = new Observable((subs) => {
      subs.next(10);
      subs.next('teste');
      subs.next(true);
      subs.next({nome: 'Gustavo'});
      subs.complete();
    })

    const variavelObserver = {
      next: (resp: any) => console.log('Response/Next Observable:', resp),
      error: (err: any) => console.log('Error Observable:', err),
      complete: () => console.log('Complete Observable')
    }

    variavelObservable.subscribe(variavelObserver)

    // variavelObservable.subscribe(
    //   resp => {
    //     console.log('variavelObsevable inscrição:', resp);
    //   },
    //   error => {
    //     console.log('Deu erro:', error);
    //   },
    //   () => {
    //     console.log('Observable completado!')
    //   }
    // )

  }

}
