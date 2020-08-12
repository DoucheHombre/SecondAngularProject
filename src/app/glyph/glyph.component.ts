import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glyph',
  templateUrl: './glyph.component.html',
  styleUrls: ['./glyph.component.css']
})
export class GlyphComponent implements OnInit {
  isFavourite:boolean;
  faStarVal=true;

  glyphClick(){

  }

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isFavourite=!(this.isFavourite);
  }

}
