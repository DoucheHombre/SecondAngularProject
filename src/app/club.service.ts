import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor() { }

  getClubs(){
    let clubNames:string[]=["Mohun-Bagan","Bengaluru FC","Adelaide United","Jamshedpur Fc"];
    return clubNames;
  }
}
