import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsAddComponent } from './news-add/news-add.component';
import { NewsViewComponent } from './news-view/news-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { NewsSearchComponent } from './news-search/news-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const myRoute:Routes=[
  {
    path:"",
    component:NewsAddComponent
  },
  {
    path:"view",
    component:NewsViewComponent
  },
  {
    path:"search",
    component:NewsSearchComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NewsAddComponent,
    NewsViewComponent,
    NavbarComponent,
    NewsSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
