import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseUrl = 'https://api-core-dev.caronsale.de/api/v1/'

  constructor(private http: HttpClient) { }

  checkUserRegistered(username:string){
    return this.http.get(this.baseUrl+`authentication/${username}/registered`, {observe: 'response'})
  }
  verifyCredentials(username:string, password:string){
    return this.http.put(this.baseUrl+`authentication/${username}`, {password: password})
  }
  getBuyerAuctionDetails(){
    let headers = new HttpHeaders();
    const authtoken: string = localStorage.getItem('authToken') as string;
    const userid: string = localStorage.getItem('username') as string;
    headers = headers.append('authtoken', authtoken);
    headers = headers.append('userId', userid);
    return this.http.get(`https://api-core-dev.caronsale.de/api/v2/auction/buyer/?filter=${userid}&count=false`, {headers})
  }
}

