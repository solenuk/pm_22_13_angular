import { Component } from '@angular/core';
import {NameAndPhotoComponent} from './name-and-photo/name-and-photo.component';
import {MainSectionComponent} from './main-section/main-section.component';
import {SideSectionComponent} from './side-section/side-section.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
