import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-section',
  templateUrl: './fourth-section.component.html',
  styleUrls: ['./fourth-section.component.css']
})
export class FourthSectionComponent implements OnInit {

imgUrl:string="https://www.creativeboom.com/uploads/articles/3d/3dccfc5670f2be76ea9422c7f15a207c28cd4dd5_630.jpg";

position:string="Goalkeeping";

fakePosition:string;

playerDetails={
  name:"kaLIdou KOulaBali",
  age:345678,
  price: 560000,
  date:new Date(2017,5,2),
  height:6.786989,
  price2:45689
}

  clubNames:string=`Manchester United,Chelsea,Manchester City,Liverpool, Arsenal,
                    Tottenham Hotapur, Freiburg, Frankfurt, Eintracht Braunschweig, 
                    Borussia Dortmund, Fenerbahce, Galatasaray,Benfica ,Besiktas`;

  constructor() { }

  ngOnInit(): void {
  }

  isActive:boolean=false;

  onClick(){
    console.log("Button clicked");
  }

  onClickMiddle($event){
    console.log("Middle Button clicked",$event);
  }

  onKeyUp($event){
    if($event.keyCode===13){
      console.log("Enter was pressed");
    }//13 is the code for enter button on key board
  }

  onKeyUpWay() {
    console.log("Enter was pressed on second way");
  }

  logInputValue($event){
    console.log($event.target.value);
  }

  logInputValueWay(emailAddress){
    console.log("My emailAddresss is="+emailAddress);
  }

  onKeyUPNgModel(){
    console.log("I play in "+this.position+" position.")
  }
}
