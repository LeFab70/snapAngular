import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css'],
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  isLike: boolean = false;
  btnName: string = 'Oh Snap!';
  ngOnInit(): void {
    this.title = 'Neon';
    this.description = 'mon meilleur code';
    this.createdAt = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://loremflickr.com/320/240';
  }

  onAddSpan() {
    //!this.isLike ? this.snaps++ : this.snaps--;
    !this.isLike
      ? ((this.btnName = 'Oops, un snap'), this.snaps++)
      : ((this.btnName = 'Oh Snap'), this.snaps--);
    this.isLike = !this.isLike;
  }
}
