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
      imageUrl: 'image1.png',
      address: 'Kuala Lumpur, Malaysia',
      images: [ 'assets/image1.png', 'assets/image2.png', 'assets/image3.png' ]
    },
    {
      userImg: 'assets/user2.png',
      userName: 'Clem Onojeghuo',
      userRole: '@clemono2',
      imageUrl: 'image2.png',
      address: 'San Francisco, CA',
      images: [ 'assets/image1.png', 'assets/image2.png', 'assets/image3.png' ]

    },
    {
      userImg: 'assets/user3.png',
      userName: 'Jon Tyson',
      userRole: '@jontyson',
      imageUrl: 'image3.png',
      address: 'New York, USA',
      images: [ 'assets/image1.png', 'assets/image2.png', 'assets/image3.png' ]

    },
  ];

  getUserProfiles(): UserProfile[] {
    return this.userProfiles;
  }

  getFirstUserProfile(): UserProfile {
    return this.userProfiles[0];
  }
}
