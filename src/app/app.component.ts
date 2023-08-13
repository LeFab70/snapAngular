//

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, interval, take, takeUntil } from 'rxjs';
// import {
//   concatMap,
//   mergeMap,
//   delay,
//   exhaustMap,
//   map,
//   switchMap,
//   take,
//   tap,
// } from 'rxjs/operators';
import { tap } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  destroy$!: Subject<boolean>;
  interval$!: Observable<number>;
  // redTrainsCalled = 0;
  // yellowTrainsCalled = 0;

  ngOnInit() {
    this.destroy$ = new Subject();
    this.interval$ = interval(1000);
    this.interval$
      .pipe(
        //take(10), //une seule subscribe connue
        takeUntil(this.destroy$), //jusqua la destruction du composant
        tap(console.log)
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    this.destroy$.next(true); //emission durant tout le cycle de vie du composant
  }



  
  //   interval(500)
  //     .pipe(
  //       take(10),
  //       map((value) => (value % 2 === 0 ? 'rouge' : 'jaune')),
  //       tap((color) =>
  //         console.log(
  //           `La lumière s'allume en %c${color}`,
  //           `color: ${this.translateColor(color)}`
  //         )
  //       ),
  //       exhaustMap((color) => this.getTrainObservable$(color)),
  //       tap((train) =>
  //         console.log(
  //           `Train %c${train.color} ${train.trainIndex} arrivé !`,
  //           `font-weight: bold; color: ${this.translateColor(train.color)}`
  //         )
  //       )
  //     )
  //     .subscribe();
  // }

  // getTrainObservable$(color: 'rouge' | 'jaune') {
  //   const isRedTrain = color === 'rouge';
  //   isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
  //   const trainIndex = isRedTrain
  //     ? this.redTrainsCalled
  //     : this.yellowTrainsCalled;
  //   console.log(
  //     `Train %c${color} ${trainIndex} appelé !`,
  //     `text-decoration: underline; color: ${this.translateColor(color)}`
  //   );
  //   return of({ color, trainIndex }).pipe(delay(isRedTrain ? 5000 : 6000));
  // }

  // translateColor(color: 'rouge' | 'jaune') {
  //   return color === 'rouge' ? 'red' : 'yellow';
  // }
}
