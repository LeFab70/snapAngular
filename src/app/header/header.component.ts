import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // @Input() interval$!: Observable<number>;
  menuList = [
    {
      id: 0,
      name: 'Home',
      path: '',
      icone: 'bi-house-exclamation',
    },
    { id: 1, name: 'Facesnaps', path: 'facesnaps', icone: 'bi-eyeglasses' },
  ];

  constructor(private router: Router) {}
  onCreateSnap() {
    this.router.navigateByUrl('/createfacesnap');
  }
}
