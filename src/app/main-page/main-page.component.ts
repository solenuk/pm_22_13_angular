import { Component } from '@angular/core';
import {NameAndPhotoComponent} from '../name-and-photo/name-and-photo.component';
import {MainSectionComponent} from '../main-section/main-section.component';
import {SideSectionComponent} from '../side-section/side-section.component';

@Component({
  selector: 'app-main-page',
  imports: [
    NameAndPhotoComponent,
    MainSectionComponent,
    SideSectionComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  standalone: true
})
export class MainPageComponent {

}
