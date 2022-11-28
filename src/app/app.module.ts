import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsAddComponent } from './news-add/news-add.component';
import { NewsViewComponent } from './news-view/news-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path:"",
    component:NewsAddComponent
  },
  {
    path:"view",
    component:NewsViewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NewsAddComponent,
    NewsViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
