import { SummaryPipe } from './summary.pipe';
import { AuthorListService } from './author-list.service';
import { ClubService } from './club.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { FourthSectionComponent } from './fourth-section/fourth-section.component';
import { GlyphComponent } from './glyph/glyph.component';
import { FootballComponent } from './football/football.component';



@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,
    FourthSectionComponent,
    SummaryPipe,
    GlyphComponent,
    FootballComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ClubService,
    AuthorListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
