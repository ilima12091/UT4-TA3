import { Component, Input } from '@angular/core';
import { UserProfile } from 'src/app/interface/user-profile';

@Component({
  selector: 'app-profile-images',
  templateUrl: './profile-images.component.html',
  styleUrls: ['./profile-images.component.css']
})
export class ProfileImagesComponent {
  @Input() userProfile!: UserProfile;
}
