import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'Laura Parker';
  profile_picture: string = '/img/profile_pic.png';
}
