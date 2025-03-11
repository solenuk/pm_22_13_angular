import {Component, OnInit} from '@angular/core';
import {BlackSectionComponent} from './black-section/black-section.component';
import {MainInfoComponent} from './main-info/main-info.component';
import {blackSection} from '../types';
import {ApiService} from '../api.service';

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
export class MainSectionComponent implements OnInit {
  constructor(private api: ApiService) {
  }

  isConnected: boolean = false;
  blackSectionData!: blackSection[];
  mainInfoData: string [] = ['PROFILE', 'EXPERIENCE','REFERENCE'];

  async updateBlackSection(data: blackSection[]) {
    try {
      await this.api.postBlackSectionData(data);
      this.blackSectionData = await this.api.getBlackSectionData();
    }catch(error: any){
      console.error(error.message);
      this.isConnected = false;
    }
  }

  async ngOnInit() {
    try{
      this.blackSectionData = await this.api.getBlackSectionData();
      this.isConnected = true;
    }catch(error: any){
      console.error(error.message);
      this.isConnected = false;
    }
  }
}
