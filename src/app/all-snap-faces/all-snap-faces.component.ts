import { FaceSnapService } from './../services/face-snap.service';
import { Component, OnInit } from '@angular/core';
import { FaceSnaps } from '../models/FaceSnap';

@Component({
  selector: 'app-all-snap-faces',
  templateUrl: './all-snap-faces.component.html',
  styleUrls: ['./all-snap-faces.component.css'],
})
export class AllSnapFacesComponent implements OnInit {
  snaps!: Array<FaceSnaps>;
  //snapsZise: number=0;
  // snaps2!: FaceSnaps;
  // snaps3!: FaceSnaps;
  constructor(private faceSnapsServices: FaceSnapService) {}
  ngOnInit(): void {
    this.snaps = this.faceSnapsServices.getAllFaceSnaps();
  }
}
