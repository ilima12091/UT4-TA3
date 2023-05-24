import { Component, Input } from '@angular/core';
import { Card } from 'src/app/interfaces/card'
import { UserProfile } from 'src/app/interface/user-profile';
import { UserProfileService } from 'src/app/service/user-profile.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

 userProfile: UserProfile[] = [];
  
 constructor(private userProfileService: UserProfileService) {
    this.userProfile = this.userProfileService.getUserProfile();
  }

}
