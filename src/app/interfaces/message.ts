export enum Direction {
  IN,
  OUT,
}

export interface Message {
  id: number;
  direction: Direction;
  content: string;
}
