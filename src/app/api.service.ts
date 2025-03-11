import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { blackSection } from './types';
import {firstValueFrom, timeout} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private blackSectionData!: blackSection[];

  constructor(private http: HttpClient) {
  }

  async getBlackSectionData(): Promise<blackSection[]>{
    if(this.blackSectionData){
      return this.blackSectionData;
    }else{
      try{
        this.blackSectionData = await firstValueFrom(this.http.get<blackSection[]>('http://localhost:7777/blackSection').pipe(
          timeout(2000)
        )) as blackSection[];
        return this.blackSectionData;
      }catch (error: any){
        throw new Error(error.message);
      }
    }
  }
}
