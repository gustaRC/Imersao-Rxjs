import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { SubjectComponent } from './components/subject/subject.component';
import { FromComponent } from './components/operadores-criacao/from/from.component';
import { OfComponent } from './components/operadores-criacao/of/of.component';
import { FromEventComponent } from './components/operadores-criacao/from-event/from-event.component';
import { IntervalComponent } from './components/operadores-criacao/interval/interval.component';
import { TimerComponent } from './components/operadores-criacao/timer/timer.component';
import { ThrowErrorComponent } from './components/operadores-criacao/throw-error/throw-error.component';
import { AjaxComponent } from './components/operadores-criacao/ajax/ajax.component';
import { ForkJoinComponent } from './components/operadores-criacao-juncao/fork-join/fork-join.component';
import { HttpClientModule } from '@angular/common/http';
import { ZipComponent } from './components/operadores-criacao-juncao/zip/zip.component'

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    SubjectComponent,
    FromComponent,
    OfComponent,
    FromEventComponent,
    IntervalComponent,
    TimerComponent,
    ThrowErrorComponent,
    AjaxComponent,
    ForkJoinComponent,
    ZipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
