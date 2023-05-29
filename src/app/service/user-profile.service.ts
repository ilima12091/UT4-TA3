import { Injectable } from '@angular/core';
import { UserProfile } from '../interfaces/user-profile';

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
      imageUrl: 'image1.png',
    },
    {
      userImg: 'assets/user2.png',
      userName: 'Clem Onojeghuo',
      userRole: '@clemono2',
      imageUrl: 'image2.png',
    },
    {
      userImg: 'assets/user3.png',
      userName: 'Jon Tyson',
      userRole: '@jontyson',
      imageUrl: 'image3.png',
    },
  ];

  getUserProfiles(): UserProfile[] {
    return this.userProfiles;
  }
}
