import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent implements OnInit {

  footballYes:boolean;

  onBeingClicked(){
    this.footballYes=!this.footballYes;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
