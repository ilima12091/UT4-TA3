import { Component, Input } from '@angular/core';
import { UserProfile } from 'src/app/interface/user-profile';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  @Input() userProfiles: UserProfile[] = [];
}
