import { Component, OnInit } from '@angular/core';
import { FaceSnapService } from '../services/face-snap.service';
import { FaceSnaps } from '../models/FaceSnap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.css'],
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnaps!: FaceSnaps;
  //faceSnapsName!: FaceSnaps;
  snapName!: string;
  isLike!: boolean;
  btnName!: string;
  constructor(
    private faceSnapServices: FaceSnapService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //const snapId = +this.route.snapshot.params['id'];
    //this.faceSnaps = this.faceSnapServices.getSnapById(1);
    //console.log(this.route.snapshot.params);
    this.snapName = this.route.snapshot.params['name'];
    this.faceSnaps = this.faceSnapServices.getSnapByName(this.snapName);

    this.btnName = 'Oh Snap!';
    this.isLike = false;
    //   this.faceSnaps = {
    //     title: 'Neon',
    //     description: 'mon meilleur',
    //     createdAt: new Date(),
    //     snaps: 6,
    //     imageUrl: 'https://loremflickr.com/320/240',
    //   };
    //   // this.faceSnaps.title = "Neon";
    //   // this.faceSnaps.description = 'mon meilleur code';
    //   // this.faceSnaps.createdAt = new Date();
    //   // this.faceSnaps.snaps = 6;
    //   // this.faceSnaps.imageUrl = 'https://loremflickr.com/320/240';
  }

  onAddSpan() {
    //!this.isLike ? this.snaps++ : this.snaps--;
    !this.isLike
      ? ((this.btnName = 'Oops, un snap'),
        this.faceSnapServices.snapFaceSnapById(this.faceSnaps.id, 'snap'))
      : ((this.btnName = 'Oh Snap'),
        this.faceSnapServices.snapFaceSnapById(this.faceSnaps.id, 'unsnap'));
    this.isLike = !this.isLike;
  }
}
