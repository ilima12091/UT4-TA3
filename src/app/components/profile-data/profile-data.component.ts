import { Component, Input } from '@angular/core';
import { UserProfile } from 'src/app/interface/user-profile';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css']
})
export class ProfileDataComponent {
  @Input() userProfile!: UserProfile;
}
