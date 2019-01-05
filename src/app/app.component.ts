import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'usingpipes';
  students = [
    {
      name: 'Junaidi',
      gender: 'L',
      birthdate: new Date(1990, 2, 16)
    },
    {
      name: 'Jihan',
      gender: 'L',
      birthdate: new Date(1989, 3, 13)
    },
    {
      name: 'Muhammad Zakuan',
      gender: 'L',
      birthdate: new Date(1990, 2, 1)
    },
    {
      name: 'Siska',
      gender: 'P',
      birthdate: new Date(1992, 1, 4)
    }
  ];
}
