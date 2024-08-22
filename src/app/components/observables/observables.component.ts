import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
})
export class ObservablesComponent implements OnInit{

  //criação observable
  variavelObservable = new Observable((subs) => {
    subs.next(10); //novo valor
    subs.next('teste'); //novo valor
    subs.next(true); //novo valor
    subs.next({nome: 'Gustavo'}); //novo valor
    subs.complete(); //emitindo informação de completude
  })

  ngOnInit(): void {
    this.inscObservableDefault();
    this.inscObservableObserver();
    this.inscUnsubObservable();
  }

  inscObservableDefault() {
    // Metodo Tradicional

    //incrição do observable
    this.variavelObservable.subscribe(
      resp => {
        console.log('variavelObsevable inscrição:', resp);
      },
      error => {
        console.log('Deu erro:', error);
      },
      () => {
        console.log('Observable completado!')
      }
    )

  }

  inscObservableObserver() {
    // Metodo com Observe(objeto tratando o subscribe contendo: next, error e complete)

    const variavelObserver = {
      next: (resp: any) => console.log('Response/Next Observable:', resp),
      error: (err: any) => console.log('Error Observable:', err),
      complete: () => console.log('Complete Observable')
    }

    //inscrição observable com observe
    this.variavelObservable.subscribe(variavelObserver);
  }

  inscUnsubObservable() {
    // Desinscrever de um Observable

    const intervalVariavel = interval(1000) //METODO RXJS, Observable te enviará uma contagem após um intervalo de tempo

    const unsubscribeTeste = intervalVariavel.subscribe(console.log)
    //apos 5 segundos a variavel com subscribe será desinscrita
    setTimeout(() => unsubscribeTeste.unsubscribe(), 5000)
  }

}
