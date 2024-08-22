import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { ajax } from 'rxjs/ajax'

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
})
export class AjaxComponent implements OnInit{

  ngOnInit(): void {
    this.operatorAjax();
  }

  operatorAjax() {
    const variableAjax$ = ajax.getJSON('http://localhost:3000/users')

    variableAjax$.subscribe({
      next: resp => console.log('Ajax getJSON - ', resp),
      error: error => console.error('Ajax getJSON error - ', error)
    })
  }

}
