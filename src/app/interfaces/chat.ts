import { Message } from './message';

export interface Chat {
  id: number;
  receiver: string;
  receiverProfileImageUrl: string;
  sender: string;
  messages: Message[];
}
