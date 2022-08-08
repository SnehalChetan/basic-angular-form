import { Component } from '@angular/core';
import { Friend } from './friend';
import { AddFriendService } from './add-friend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'friendBook';
  languages: string[] = [
      "html",
      "css",
      "js",
      "php",
      "phython",
      "django"
    ];
  /**
   * create a new friend
   */
  myfriend = new Friend("","","","",0,"");

  /**
   * constructor for language dropdown
   */

  constructor(private _addFriendService: AddFriendService) {}
  /**
   * method to submit a form with validation
   */
   submitFriendForm () {
    //console.log(this.myfriend);
    let observables = this._addFriendService.addFriend(this.myfriend);
    //console.log(observables);
    observables.subscribe(data=>console.log(data), error=>console.log(error));
  }
}
