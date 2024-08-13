import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent  implements OnInit{

  ngOnInit(): void {
    this.initSubject();
    this.initBehaviorSubject();
  }

  initSubject() {
    //criação subject
    const subjectVariavel = new Subject<number>()

    //inscrição 1
    subjectVariavel.subscribe({
      next: resp => console.log('s1- ', resp)
    })
    //inscrição 2
    subjectVariavel.subscribe({
      next: resp => console.log('s2- ', resp)
    })

    //atribuição de valores
    //NOTE QUE ESTÁ DEPOIS DA INSCRIÇÃO, LOGO SERÁ A ULTIMA "PARTE" A SER EXECUTADA
    subjectVariavel.next(2343)
    subjectVariavel.next(56323)
  }

  initBehaviorSubject() {
    //instanciando com valor inicial 0
    const behaviorSubjectVariavel = new BehaviorSubject<number>(0);

    //inscrição 1
    behaviorSubjectVariavel.subscribe({
      next: resp => console.log('b1- ', resp)
    })
    //inscrição 2
    behaviorSubjectVariavel.subscribe({
      next: resp => console.log('b2- ', resp)
    })

    //atribuindo novos valores
    behaviorSubjectVariavel.next(123);
    behaviorSubjectVariavel.next(678);
  }

}
