import { Component } from '@angular/core';
import { UserProfile } from 'src/app/interface/user-profile';
import { Chat } from 'src/app/interfaces/chat';
import { ChatsService } from 'src/app/services/chats-service/chats.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  chat?: Chat;
  // Este usuario debería estar guardado en el store de la sesión en el navegador
  currentUser: UserProfile = {
    id: 0,
    userImg: 'assets/user1.png',
    userName: 'Ridhwan Nordin',
    userRole: '@ridzjcob',
    imageUrl: 'image1.png',
  };

  constructor(private chatsService: ChatsService) {
    this.chatsService.getChat(0, 0).then((chat) => {
      this.chat = chat;
    });
  }
}
