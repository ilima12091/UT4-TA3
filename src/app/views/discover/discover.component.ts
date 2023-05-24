import { Component } from '@angular/core';
import { UserProfile } from 'src/app/interface/user-profile';
import { UserProfileService } from 'src/app/service/user-profile.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
})
export class DiscoverComponent {
  userProfiles: UserProfile[] = [];

  constructor(private userProfileService: UserProfileService) {
    this.userProfiles = this.userProfileService.getUserProfiles();
  }
}
