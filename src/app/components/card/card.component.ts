import { Component, Input } from '@angular/core';
import { UserProfile } from 'src/app/interface/user-profile';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() userProfile!: UserProfile;
}
