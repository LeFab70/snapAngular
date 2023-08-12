import { Component, OnInit } from '@angular/core';
import { Observable, filter, interval, map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  interval$!: Observable<string>;
  ngOnInit(): void {
    //operateur de bas niveau
    this.interval$ = interval(1000).pipe(
      filter((value) => value >= 2),
      map((value) => (value % 2 === 0 ? ` ${value} pair` : `${value} impair`)),
      tap((next) => this.logger(next))
    );
    // this.interval$.subscribe({ next: (value) => console.log(value) });
    // setTimeout(() => {
    //   this.interval$.subscribe({ next: (value) => console.log(value) });
    // }, 3000);
  }

  logger(text: string) {
    console.log(text);
  }
}
