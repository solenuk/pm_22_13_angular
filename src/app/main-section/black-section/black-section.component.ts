import {Component, Input} from '@angular/core';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-black-section',
  standalone: true,
  templateUrl: './black-section.component.html',
  imports: [
    NgFor
  ],
  styleUrl: './black-section.component.scss'
})
export class BlackSectionComponent {
  @Input() dataToDisplay!: { name: string, data: string }[];
}
