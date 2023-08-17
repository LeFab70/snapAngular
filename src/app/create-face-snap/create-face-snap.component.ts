import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FaceSnaps } from '../models/FaceSnap';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { FaceSnapService } from '../services/face-snap.service';
@Component({
  selector: 'app-create-face-snap',
  templateUrl: './create-face-snap.component.html',
  styleUrls: ['./create-face-snap.component.css'],
})
export class CreateFaceSnapComponent implements OnInit {
  snapForm!: FormGroup;
  preview: boolean = false;
  urlRegex!: RegExp;
  faceSnapPreview$!: Observable<FaceSnaps>;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private faceSnapService: FaceSnapService
  ) {}
  ngOnInit(): void {
    this.urlRegex =
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group(
      {
        title: [
          null,
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(12),
          ],
        ], //Validators.pattern(this.urlRegex)],

        description: [null, [Validators.required]],
        imageUrl: [null, [Validators.required,Validators.pattern(this.urlRegex)]],
        location: [null, [Validators.required]],
      },
      // {
      //   updateOn: 'touched',
      // }
    );
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map((value) => ({
        ...value,
        createdAt: new Date(),
        snaps: 0,
        id: 0//+(Math.random() * 1000).toFixed(),
      }))
    );
  }

  onSubmitSnap() {
    this.faceSnapService.addFaceSnap(this.snapForm.value);
    this.router.navigateByUrl('/facesnaps');
    //console.log(this.snapForm.value);
  }
  onPreview() {
    this.preview = !this.preview;
    //console.log(this.preview);
  }

  getErrorMessage(controlName: String, errorInput: ValidationErrors) {
    if (errorInput['required']) {
      return controlName + ' is required';
    } else if (errorInput['minlength']) {
      return (
        controlName +
        ' should have at least ' +
        errorInput['minlength']['requiredLength'] +
        ' characters'
      );
    }
    else if (errorInput['min']) {
      return (
        controlName +
        ' should been positive number with minimun value ' +
        errorInput['min']['min']

      );
    }


    else return '';
  }

}
