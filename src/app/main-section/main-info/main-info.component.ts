import {Component, Input} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-main-info',
  standalone: true,
  imports: [
    NgFor,
    NgIf
  ],
  templateUrl: './main-info.component.html',
  styleUrl: './main-info.component.scss'
})
export class MainInfoComponent {
  @Input() mainInfo!: string[];
}
