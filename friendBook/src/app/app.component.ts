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
  allFriends: Friend[] = [];

  /**
   * constructor for language dropdown
   */

  constructor(private _addFriendService: AddFriendService) {}

  /**
   * on page load get all friends list
   */
  ngOnInit(){
    this.getFriends('http://localhost:6969/allFriends').then(()=>console.log(this.allFriends));
  }
  /**
   * method to submit a form with validation
   */
  submitFriendForm() {
    let component = this;
    this._addFriendService.addFriend(this.myfriend).subscribe({
      next(x) { component.getFriends('http://localhost:6969/allFriends').then(()=>console.log(component.allFriends))},
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });
  }

  /**
   *
   */
   public async getFriends(url:string): Promise<any>{
    let response = await fetch(url,{method:'GET',headers:{'content-type':'application/json'}});
    this.allFriends = await response.json();
  }
}
