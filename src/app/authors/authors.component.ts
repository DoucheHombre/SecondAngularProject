import { Component, OnInit } from '@angular/core';
import { AuthorListService } from './../author-list.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authorNames:string[];
  numberOfAuthors:number;

  constructor(authors:AuthorListService) {
      this.authorNames=authors.getNamesOfAuthors();
      this.numberOfAuthors=(this.authorNames).length;
   }

  ngOnInit(): void {
  }

}
