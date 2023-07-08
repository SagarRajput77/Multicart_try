import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewSService {
private url = "http://localhost:3000/data"
  constructor(private htt:HttpClient) {

   }
   get(){
    return this.htt.get(this.url);
   }
   postD(data:any){
    return this.htt.post(this.url,data);
   }
}
