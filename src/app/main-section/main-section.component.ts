import {Component} from '@angular/core';
import {BlackSectionComponent} from './black-section/black-section.component';
import {MainInfoComponent} from './main-info/main-info.component';

@Component({
  selector: 'app-main-section',
  standalone: true,
  templateUrl: './main-section.component.html',
  imports: [
    BlackSectionComponent,
    MainInfoComponent
  ],
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {
  blackSectionData: { name: string, data: string }[] = [
    {name: 'Phone', data: '0123 456 789'},
    {name: 'Email', data: 'uremail@namehere'},
    {name: 'Address', data: 'Your Street Address'}
  ]

  mainInfoData: { name: string }[] = [
    {
      name: 'PROFILE'
    },
    {
      name: 'EXPERIENCE'
    },
    {
      name: 'REFERENCE'
    }
  ]
}
