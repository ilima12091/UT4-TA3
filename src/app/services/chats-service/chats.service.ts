import { Injectable } from '@angular/core';
import { Chat } from 'src/app/interfaces/chat';

@Injectable({
  providedIn: 'root',
})
export class ChatsService {
  constructor() {}

  private BASE_URL = 'http://localhost:3000';

  async getUserChats(userId: number): Promise<Chat[] | undefined> {
    return (
      (await (await fetch(`${this.BASE_URL}/users/${userId}`)).json())?.chats ??
      undefined
    );
  }
}
