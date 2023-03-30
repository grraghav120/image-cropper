import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  profilePic: string='';

  constructor() { }

  getImage(base64:string){
    this.profilePic=base64;
  }
}
