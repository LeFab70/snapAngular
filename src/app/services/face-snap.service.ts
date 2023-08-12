import { Injectable } from '@angular/core';
import { FaceSnaps } from '../models/FaceSnap';

@Injectable({ providedIn: 'root' })
export class FaceSnapService {
  snaps: Array<FaceSnaps> = [
    {
      id: 1,
      title: 'Neon',
      description: 'mon meilleur',
      createdAt: new Date(),
      snaps: 105,
      imageUrl: 'https://source.unsplash.com/random/320x240?sig=5', //'https://loremflickr.com/320/240',
      location: 'paris par la France',
    },
    {
      id: 2,
      title: 'Fab',
      description: 'fabrice kouonang',
      createdAt: new Date(),
      snaps: 300,
      imageUrl: 'https://picsum.photos/320/240',
    },

    {
      id: 3,
      title: 'Regina',
      description: 'My life ',
      createdAt: new Date(),
      snaps: 0,
      imageUrl: 'https://source.unsplash.com/random/320x240?sig=3',
      location: 'Montreal par le canada',
    },

    {
      id: 4,
      title: 'Neon',
      description: 'mon meilleur',
      createdAt: new Date(),
      snaps: 105,
      imageUrl: 'https://source.unsplash.com/random/320x240?sig=7', //'https://loremflickr.com/320/240',
      location: 'paris par la France',
    },
    {
      id: 5,
      title: 'Fab',
      description: 'fabrice kouonang',
      createdAt: new Date(),
      snaps: 300,
      imageUrl: 'https://picsum.photos/320/240',
    },

    {
      id: 6,
      title: 'Regina',
      description: 'My life ',
      createdAt: new Date(),
      snaps: 0,
      imageUrl: 'https://source.unsplash.com/random/320x240?sig=9',
      location: 'Montreal par le canada',
    },
    {
      id: 7,
      title: 'Neon',
      description: 'mon meilleur',
      createdAt: new Date(),
      snaps: 105,
      imageUrl: 'https://source.unsplash.com/random/320x240?sig=1', //'https://loremflickr.com/320/240',
      location: 'paris par la France',
    },
    {
      id: 8,
      title: 'Fab',
      description: 'fabrice kouonang',
      createdAt: new Date(),
      snaps: 300,
      imageUrl: 'https://picsum.photos/320/240',
    },

    {
      id: 9,
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
  getSnapById(snapId: number): FaceSnaps {
    const snapFound = this.snaps.find((snap) => snap.id === snapId);
    if (!snapFound) throw new Error('snap not found!');
    return snapFound;
  }
  snapFaceSnapById(snapId: number, snapType: 'snap' | 'unsnap'): void {
    //snapFound?snapFound.snaps++ : (throw new Error("snap mot found!"))
    const facSnap = this.getSnapById(snapId);
    snapType === 'snap' ? facSnap.snaps++ : facSnap.snaps--;
  }
}
