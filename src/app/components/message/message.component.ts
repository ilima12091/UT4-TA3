import { Component, Input } from '@angular/core';
import { UserProfile } from 'src/app/interface/user-profile';
import { Message } from 'src/app/interfaces/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  @Input() message!: Message;
  @Input() user?: UserProfile;
}
