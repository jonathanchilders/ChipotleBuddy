import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chipotle Buddy';
  links = [
    new IndexLink("https://www.google.com/","Enter a new meal"),
    new IndexLink("https://www.google.com/","View your progress"),
  ];
}

export class IndexLink {
  url : string;
  description : string;
  constructor(url : string, description : string) {
    this.url = url;
    this.description = description;
  }
}
