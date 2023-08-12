import { Injectable } from '@angular/core';
import { FaceSnaps } from '../models/FaceSnap';

@Injectable({ providedIn: 'root' })
export class FaceSnapService {
  snaps: Array<FaceSnaps> = [
    {
      title: 'Neon',
      description: 'mon meilleur',
      createdAt: new Date(),
      snaps: 105,
      imageUrl: 'https://source.unsplash.com/random/320x240?sig=5', //'https://loremflickr.com/320/240',
      location: 'paris par la France',
    },
    {
      title: 'Fab',
      description: 'fabrice kouonang',
      createdAt: new Date(),
      snaps: 300,
      imageUrl: 'https://picsum.photos/320/240',
    },

    {
      title: 'Regina',
      description: 'My life ',
      createdAt: new Date(),
      snaps: 0,
      imageUrl: 'https://source.unsplash.com/random/320x240?sig=3',
      location: 'Montreal par le canada',
    },

    {
      title: 'Neon',
      description: 'mon meilleur',
      createdAt: new Date(),
      snaps: 105,
      imageUrl: 'https://source.unsplash.com/random/320x240?sig=7', //'https://loremflickr.com/320/240',
      location: 'paris par la France',
    },
    {
      title: 'Fab',
      description: 'fabrice kouonang',
      createdAt: new Date(),
      snaps: 300,
      imageUrl: 'https://picsum.photos/320/240',
    },

    {
      title: 'Regina',
      description: 'My life ',
      createdAt: new Date(),
      snaps: 0,
      imageUrl: 'https://source.unsplash.com/random/320x240?sig=9',
      location: 'Montreal par le canada',
    },
    {
      title: 'Neon',
      description: 'mon meilleur',
      createdAt: new Date(),
      snaps: 105,
      imageUrl: 'https://source.unsplash.com/random/320x240?sig=1', //'https://loremflickr.com/320/240',
      location: 'paris par la France',
    },
    {
      title: 'Fab',
      description: 'fabrice kouonang',
      createdAt: new Date(),
      snaps: 300,
      imageUrl: 'https://picsum.photos/320/240',
    },

    {
      title: 'Regina',
      description: 'My life ',
      createdAt: new Date(),
      snaps: 0,
      imageUrl: 'https://source.unsplash.com/random/320x240?sig=9',
      location: 'Montreal par le canada',
    },
  ];
  getAllFaceSnaps(): Array<FaceSnaps> {
    return this.snaps;
  }
}
