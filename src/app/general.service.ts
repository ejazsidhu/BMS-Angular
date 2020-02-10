import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  ip='http://biz.concavetech.com//';

  constructor(private http:HttpClient) { }

  getData(){
const path=this.ip+'sectionController'
    return this.http.post(path,{userId:1});

    
  }
}
