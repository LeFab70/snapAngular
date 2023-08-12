import { FaceSnapService } from './../services/face-snap.service';
import { Component, Input, OnInit } from '@angular/core';
import { FaceSnaps } from '../models/FaceSnap';
//import { FaceSnaps } from '../models/FaceSnap';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnaps!: FaceSnaps; //props de react JS
  // title!: string;
  // description!: string;
  // createdAt!: Date;
  // snaps!: number;
  // imageUrl!: string;
  //faceSnaps!: FaceSnaps; // = {
  //   title: 'Neon',
  //   description: 'mon meilleur',
  //   createdAt: new Date(),
  //   snaps: 6,
  //   imageUrl: 'https://loremflickr.com/320/240',
  // };

  isLike!: boolean;
  btnName!: string;
  constructor(private faceSnapServices: FaceSnapService) {}
  ngOnInit(): void {
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
