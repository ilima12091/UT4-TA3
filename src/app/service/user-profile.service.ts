import { Injectable } from '@angular/core';
import { UserProfile } from '../interface/user-profile';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  constructor() {}

  userProfiles: UserProfile[] = [
    {
      userImg: 'assets/user1.png',
      userName: 'Ridhwan Nordin',
      userRole: '@ridzjcob',
    },
    {
      userImg: 'assets/user2.png',
      userName: 'Clem Onojeghuo',
      userRole: '@clemono2',
    },
    {
      userImg: 'assets/user3.png',
      userName: 'Jon Tyson',
      userRole: '@jontyson',
    },
  ];

  getUserProfiles(): UserProfile[] {
    return this.userProfiles;
  }
}
