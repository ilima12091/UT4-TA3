import { Component } from '@angular/core';
import { UserProfile } from './interface/user-profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UT4-TA3';

  userProfile : UserProfile = {      
  userImg: 'assets/images/user.png',
  userName: 'John Doe',
  userRole: '@johndoe'
}
}
