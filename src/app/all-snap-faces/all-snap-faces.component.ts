import { FaceSnapService } from './../services/face-snap.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnaps } from '../models/FaceSnap';
import { Observable, Subject, interval, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-all-snap-faces',
  templateUrl: './all-snap-faces.component.html',
  styleUrls: ['./all-snap-faces.component.css'],
})
export class AllSnapFacesComponent implements OnInit, OnDestroy {
  snaps!: Array<FaceSnaps>;
  interval$!: Observable<number>;
  destroy$!: Subject<boolean>;
  //snapsZise: number=0;
  // snaps2!: FaceSnaps;
  // snaps3!: FaceSnaps;
  constructor(private faceSnapsServices: FaceSnapService) {}
  ngOnInit(): void {
    this.destroy$ = new Subject();
    this.faceSnapsServices.generateSnaps(100);
    this.snaps = this.faceSnapsServices.getAllFaceSnaps();
    this.interval$ = interval(1000);
    this.interval$
      .pipe(
        //take(2),//pour une souscriptio connue
        takeUntil(this.destroy$), //suscription pendant le cycle de vie du component
        tap(console.log)
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
