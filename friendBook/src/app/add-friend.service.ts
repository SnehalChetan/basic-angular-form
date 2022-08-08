import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Friend } from './friend';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AddFriendService {
  /**
   * the @addfriends must match with the post method of server.js
   * @private
   */
  private _url : string = 'http://localhost:6969/addfriends';

  constructor(private http : HttpClient) {}

  addFriend(friend:Friend){
    return this.http.post<Friend>(this._url, friend)
  }
}
