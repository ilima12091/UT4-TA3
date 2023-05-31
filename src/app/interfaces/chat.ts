import { UserProfile } from '../interface/user-profile';
import { Message } from './message';

export interface Chat {
  id: number;
  receiver: UserProfile;
  sender: string;
  messages: Message[];
}
