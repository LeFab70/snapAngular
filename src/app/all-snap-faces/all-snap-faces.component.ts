import { Component, OnInit } from '@angular/core';
import { FaceSnaps } from '../models/FaceSnap';

@Component({
  selector: 'app-all-snap-faces',
  templateUrl: './all-snap-faces.component.html',
  styleUrls: ['./all-snap-faces.component.css'],
})
export class AllSnapFacesComponent implements OnInit {
  snaps!: FaceSnaps;
  snaps2!: FaceSnaps;
  snaps3!: FaceSnaps;
  ngOnInit(): void {
    this.snaps = {
      title: 'Neon',
      description: 'mon meilleur',
      createdAt: new Date(),
      snaps: 5,
      imageUrl: "https://source.unsplash.com/random/320x240?sig=5",//'https://loremflickr.com/320/240',
      location: 'paris par la France',
    };

    this.snaps2 = {
      title: 'Fab',
      description: 'fabrice kouonang',
      createdAt: new Date(),
      snaps: 3,
      imageUrl: 'https://picsum.photos/320/240',
    };


    this.snaps3 = {
      title: 'Regina',
      description: 'My life ',
      createdAt: new Date(),
      snaps: 0,
      imageUrl: "https://source.unsplash.com/random/320x240?sig=3",
      location: 'Montreal par le canada',
    };
  }
}
