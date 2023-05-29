import { Component, Input } from '@angular/core';
import { UserProfile } from 'src/app/interfaces/user-profile';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  @Input() userProfile!: UserProfile;
}
