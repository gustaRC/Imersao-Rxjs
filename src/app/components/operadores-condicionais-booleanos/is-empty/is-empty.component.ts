import { Component, OnInit } from '@angular/core';
import { isEmpty, Subject } from 'rxjs';

@Component({
  selector: 'app-is-empty',
  templateUrl: './is-empty.component.html',
})
export class IsEmptyComponent implements OnInit{

  ngOnInit(): void {
    this.operatorIsEmpty();
  }

  operatorIsEmpty() {
    const variableSubject$ = new Subject<string>();

    variableSubject$
    .pipe(
      isEmpty()
    )
    .subscribe({
      next: resp => console.log('IsEmpty resp - ', resp),
      error: err => console.log('IsEmpty err - ', err),
    })


  }

}
