import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
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
