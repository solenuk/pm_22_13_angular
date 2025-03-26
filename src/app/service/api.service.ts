import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {blackSection, ServerResponse, User} from '../types';
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

  async register(user: User): Promise<ServerResponse>{
    try {
      await firstValueFrom(this.http.post(`${this.API_URL}/register`, user));
      return {status: 200, message: ''};
    }catch (error: any){
      if(error.status === 400){
        return {status: 400, message: error.error.message};
      }
      throw new Error(error);
    }
  }

  async login(user: User): Promise<ServerResponse>{
    try {
      const response: User = await firstValueFrom(this.http.post(`${this.API_URL}/login`, user)) as User;
      return {status: 200, message: '', user: response};
    }catch (error: any){
      if(error.status === 401){
        return {status: 401, message: error.error.message};
      }
      throw new Error(error);
    }
  }
}
