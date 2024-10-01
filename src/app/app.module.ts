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
import { ZipComponent } from './components/operadores-criacao-juncao/zip/zip.component';
import { MergeConcatComponent } from './components/operadores-criacao-juncao/merge-concat/merge-concat.component';
import { MapComponent } from './components/operadores-transformacao/map/map.component';
import { MapToComponent } from './components/operadores-transformacao/map-to/map-to.component';
import { SwitchMapComponent } from './components/operadores-transformacao/switch-map/switch-map.component';
import { PluckComponent } from './components/operadores-transformacao/pluck/pluck.component';
import { ToArrayComponent } from './components/operadores-transformacao/to-array/to-array.component';
import { FilterComponent } from './components/operadores-filtragem/filter/filter.component';
import { TakeComponent } from './components/operadores-filtragem/take/take.component';
import { TakeUntilComponent } from './components/operadores-filtragem/take-until/take-until.component';
import { TakeWhileComponent } from './components/operadores-filtragem/take-while/take-while.component';
import { SkipComponent } from './components/operadores-filtragem/skip/skip.component';
import { DebounceTimeComponent } from './components/operadores-filtragem/debounce-time/debounce-time.component';
import { SwitchAllComponent } from './components/operadores-juncao/switch-all/switch-all.component';
import { StartWithComponent } from './components/operadores-juncao/start-with/start-with.component';
import { CombineLatestComponent } from './components/operadores-juncao/combine-latest/combine-latest.component';
import { WithLatestFromComponent } from './components/operadores-juncao/with-latest-from/with-latest-from.component';
import { ShareReplayComponent } from './components/operadores-multicasting/share-replay/share-replay.component';
import { ShareComponent } from './components/operadores-multicasting/share/share.component';
import { CatchErrorComponent } from './components/operadores-tratamentos-erros/catch-error/catch-error.component';
import { RetryComponent } from './components/operadores-tratamentos-erros/retry/retry.component';
import { RetryWhenComponent } from './components/operadores-tratamentos-erros/retry-when/retry-when.component';
import { TapComponent } from './components/operadores-utilitarios/tap/tap.component'

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
    MergeConcatComponent,
    MapComponent,
    MapToComponent,
    SwitchMapComponent,
    PluckComponent,
    ToArrayComponent,
    FilterComponent,
    TakeComponent,
    TakeUntilComponent,
    TakeWhileComponent,
    SkipComponent,
    DebounceTimeComponent,
    SwitchAllComponent,
    StartWithComponent,
    CombineLatestComponent,
    WithLatestFromComponent,
    ShareReplayComponent,
    ShareComponent,
    CatchErrorComponent,
    RetryComponent,
    RetryWhenComponent,
    TapComponent,
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
