import { Component } from '@angular/core';
import { UserProfile } from 'src/app/interface/user-profile';
import { UserProfileService } from 'src/app/service/user-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userProfile: UserProfile = this.userProfileService.getFirstUserProfile();
  
  constructor(private userProfileService: UserProfileService) {
  }
}
