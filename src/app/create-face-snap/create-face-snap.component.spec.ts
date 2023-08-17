import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFaceSnapComponent } from './create-face-snap.component';

describe('CreateFaceSnapComponent', () => {
  let component: CreateFaceSnapComponent;
  let fixture: ComponentFixture<CreateFaceSnapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFaceSnapComponent]
    });
    fixture = TestBed.createComponent(CreateFaceSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
