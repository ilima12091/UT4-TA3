export enum Direction {
  IN = 'IN',
  OUT = 'OUT',
}

export interface Message {
  id: number;
  direction: Direction;
  content: string;
}
