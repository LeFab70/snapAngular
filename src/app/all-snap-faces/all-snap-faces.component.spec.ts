import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSnapFacesComponent } from './all-snap-faces.component';

describe('AllSnapFacesComponent', () => {
  let component: AllSnapFacesComponent;
  let fixture: ComponentFixture<AllSnapFacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllSnapFacesComponent]
    });
    fixture = TestBed.createComponent(AllSnapFacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
