import { Component } from '@angular/core';
import { Friend } from './friend';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'friendBook';
  languages: string[];

  myfriend = new Friend("","","","",0,"");
    constructor() {

      this.languages = [
        "html",
        "css",
        "js",
        "php",
        "phython",
        "django"
      ];
  }
}

