import { Component } from '@angular/core';

@Component({
  selector: 'app-news-search',
  templateUrl: './news-search.component.html',
  styleUrls: ['./news-search.component.css']
})
export class NewsSearchComponent {

  title=""

  readValue=()=>
  {
    let data:any={
      "title":this.title
    }
    console.log(data)
  }

}
