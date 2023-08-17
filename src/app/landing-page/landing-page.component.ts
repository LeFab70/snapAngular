import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  imageUrl: string = 'https://source.unsplash.com/random/320x240?sig=5';
  altText: string = 'Logo snap';
  emailInput!: string;
  nameInput!: string;

  constructor(private router: Router) {}
  onNext() {
    this.router.navigateByUrl('facesnaps');
  }
  onSubmit(newsLetterForm: NgForm) {
    //console.log(this.emailInput);
    console.log(newsLetterForm.value);
  }
}
