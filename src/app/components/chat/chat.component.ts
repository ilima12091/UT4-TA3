import { Component } from '@angular/core';
import { Chat } from 'src/app/interfaces/chat';
import { ChatsService } from 'src/app/services/chats-service/chats.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  chat?: Chat;

  constructor(private chatsService: ChatsService) {
    this.chatsService.getChat(0, 0).then((chat) => (this.chat = chat));
  }
}
