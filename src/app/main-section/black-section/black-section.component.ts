import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgFor} from '@angular/common';
import {blackSection} from '../../types';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-black-section',
  standalone: true,
  templateUrl: './black-section.component.html',
  imports: [
    NgFor,
    FormsModule
  ],
  styleUrl: './black-section.component.scss'
})

export class BlackSectionComponent {
  @Input() dataToDisplay!: blackSection[];
  @Input() isConnected: boolean = false;
  @Output() dataUpdate = new EventEmitter<blackSection[]>();
  isShown: boolean = false;

  onSubmit(form: NgForm) {
    this.dataUpdate.emit(form.value as blackSection[])
  }
}
