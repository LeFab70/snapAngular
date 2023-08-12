import { Component, Input } from '@angular/core';
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

}
