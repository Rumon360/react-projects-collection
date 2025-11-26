export enum Status {
  TODO = "TODO",
  IN_PROGRESS = "IN PROGRESS",
  DONE = "DONE",
}

export type CardType = {
  id: string;
  title: string;
  points?: number;
  status: Status;
};
