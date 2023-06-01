import { Component, Input } from '@angular/core';
import { Chat } from 'src/app/interfaces/chat';

@Component({
  selector: 'app-chat-row',
  templateUrl: './chat-row.component.html',
  styleUrls: ['./chat-row.component.css'],
})
export class ChatRowComponent {
  @Input() chat!: Chat;
}
