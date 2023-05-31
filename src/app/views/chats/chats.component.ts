import { Component } from '@angular/core';
import { Chat } from 'src/app/interfaces/chat';
import { ChatsService } from 'src/app/services/chats-service/chats.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css'],
})
export class ChatsComponent {
  chats: Chat[] = [];

  constructor(private chatsService: ChatsService) {
    this.chatsService.getUserChats(0).then((chats) => {
      this.chats = chats ?? [];
    });
  }
}
