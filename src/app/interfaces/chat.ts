import { UserProfile } from "./user-profile";
import { Message } from './message';

export interface Chat {
  id: number;
  receiver: UserProfile;
  receiverProfileImageUrl: string;
  sender: string;
  messages: Message[];
}
