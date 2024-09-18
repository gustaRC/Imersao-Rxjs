import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
})
export class SwitchMapComponent implements AfterViewInit{

  @ViewChild('myBtn') btnHtml!: ElementRef;

  constructor(
    private http: HttpClient
  ) {}


  ngAfterViewInit(): void {
    this.operatorSwitchMap();
    // this.operatorSwitchMapInterval();
  }

  operatorSwitchMap() {
    let emailRequisicao = ''

    const clickBtnEvent = fromEvent(this.btnHtml.nativeElement, 'click');

    clickBtnEvent
    .pipe( //REQUISIÇÃO 1 - RECEBENDO UM EVENTO/clickEvent;
      switchMap(() => this.http.get('http://localhost:3000/userEmail'))
    )
    .pipe( //REQUISIÇÃO 2 - RECEBENDO OS VALORES DA URL: 'http://localhost:3000/userEmail'
      map((resp: any) => resp.email), //"SALVOU" O VALOR email DA REQUISIÇÃO
      switchMap(email => {
        emailRequisicao = email
        return this.http.get(`http://localhost:3000/users?email=${email}`)
      })
    )
    .subscribe({ //REQUISIÇÃO FINAL - RECEBENDO OS VALORES DA URL: `http://localhost:3000/users?email=${email}`
      next: resp => console.log('SwitchMap resp - ', `Email: "${emailRequisicao}"`, resp),
      error: err => console.log('SwitchMap error - ', err),
    })

  }

  operatorSwitchMapInterval() {
    const clickDocEvent = fromEvent(document, 'click');

    clickDocEvent
    .pipe(
      switchMap(() => interval(1000))
    )
    .subscribe({
      next: resp => console.log('SwitchMap Interval resp - ', resp),
      error: err => console.log('SwitchMap Interval error - ', err)
    })

  }

}
