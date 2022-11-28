import { Component } from '@angular/core';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.css']
})
export class NewsAddComponent {

  id=""
  title=""
  description=""
  author=""
  url=""
  urlToImage=""
  publishedAt=""
  source=""
  content=""

  readValue=()=>
  {
    let data:any={
      "id":this.id,"title":this.title,"description":this.description,"author":this.author,"url":this.url,"urlToImage":this.urlToImage,
      "publishedAt":this.publishedAt,"source":this.source,"content":this.content
  }
  console.log(data)
  }


}
