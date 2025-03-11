import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { blackSection } from './types';
import {firstValueFrom, timeout} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL: string = 'http://localhost:7777';
  private blackSectionData!: blackSection[];

  constructor(private http: HttpClient) {
  }

  async postBlackSectionData(data: blackSection[]) {
    try{
    this.blackSectionData = await firstValueFrom(this.http.post(`${this.API_URL}/blackSectionUpdate`, data)) as blackSection[];
    }catch(error: any){
      throw new Error(error.message);
    }
  }

  async getBlackSectionData(): Promise<blackSection[]>{
    if(this.blackSectionData){
      return this.blackSectionData;
    }else{
      try{
        this.blackSectionData = await firstValueFrom(this.http.get<blackSection[]>(`${this.API_URL}/blackSection`).pipe(
          timeout(2000)
        )) as blackSection[];
        return this.blackSectionData;
      }catch (error: any){
        throw new Error(error.message);
      }
    }
  }
}
