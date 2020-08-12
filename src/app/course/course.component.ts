import { ClubService } from './../club.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  name:string ="Zlatan"
  clubs:string[];
  
 /* constructor(clubServ:ClubService) {
      this.clubs=clubServ.getClubs();
   }
 */ //Using Dependency Injection---rescommended
 
   constructor(){
     let clubSer=new ClubService();
     this.clubs=clubSer.getClubs();
   } //using tight couplind, Not Recommended

  ngOnInit(): void {
  }

  getTitle():string
  {
    return "Ibrahimovic";
  }

  

}
