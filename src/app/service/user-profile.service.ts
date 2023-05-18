import { Injectable } from '@angular/core';
import { UserProfile } from '../interface/user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor() { }

  userProfile: UserProfile[] = [
    {
      userImg: 'assets/images/user.png',
      userName: 'John Doe',
      userRole: '@johndoe'
    },
    {
      userImg: 'assets/images/user2.png',
      userName: 'Juana de Arco',
      userRole: '@juana.arco'
    },
    {
      userImg: 'assets/images/user2.png',
      userName: 'Maria de los Angeles',
      userRole: '@maria.angeles'
    }
  ];

  getUserProfile(): UserProfile[] {
    return this.userProfile;
  }
}
