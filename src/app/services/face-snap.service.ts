import { Injectable } from '@angular/core';
import { FaceSnaps } from '../models/FaceSnap';
import arrayWords from '../models/Words';
@Injectable({ providedIn: 'root' })
export class FaceSnapService {
  snaps: Array<FaceSnaps>=[]


  getAllFaceSnaps(): Array<FaceSnaps> {
    return this.snaps;
  }
  getSnapById(snapId: number): FaceSnaps {
    const snapFound = this.snaps.find((snap) => snap.id === snapId);
    if (!snapFound) throw new Error('snap not found!');
    return snapFound;
  }
  getSnapByName(snapName: string): FaceSnaps {
    const snapFound = this.snaps.find((snap) => snap.title === snapName);
    if (!snapFound) throw new Error('snap not found!');
    return snapFound;
  }
  snapFaceSnapById(snapId: number, snapType: 'snap' | 'unsnap'): void {
    //snapFound?snapFound.snaps++ : (throw new Error("snap mot found!"))
    const facSnap = this.getSnapById(snapId);
    snapType === 'snap' ? facSnap.snaps++ : facSnap.snaps--;
  }

  generateLorem(size: number): string {
    return arrayWords.slice(0, size).join();
  }

  generateSnaps(size: number): void {
    for (let index = 0; index < size; index++) {
      // const element = array[index];
      let snap: FaceSnaps = {
        id: index,
        title: `snaps-${(Math.random() * 1000).toFixed(0)}`,
        description: `${this.generateLorem(Math.random() * 100)}`,
        createdAt: new Date(),
        snaps: +(Math.random() * 1000).toFixed(0),
        imageUrl:
          'https://source.unsplash.com/random/320x240?sig=' +
          (Math.random() * size).toFixed(0), //'https://loremflickr.com/320/240',
        location: `${this.generateLorem(Math.random() * 10)}`,
      };
      this.snaps.push(snap);
    }
  }
}
