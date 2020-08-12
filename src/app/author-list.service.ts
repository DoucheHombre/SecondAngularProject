import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorListService {

  constructor() { }

  getNamesOfAuthors():string[]
  {
    let authorNames:string[]=["Arthur Conan Doyle","Agatha Christie",
                              "J.K. rowling","William Shakespeare",
                              "Stephen King","Sharadindu Bandhopadhyay",
                              "Rabindranath Tagore","Syed Mustafa Siraj",
                              "Ruskin Bond","Edgar Allan Poe"];
    return authorNames;
  }
}
