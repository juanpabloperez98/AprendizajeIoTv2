export interface ListQuestion {
  text: string;
  control: string;
  isTrue?: boolean;
}

export interface QuestionData {
  title: string;
  listQuestion: ListQuestion[];
}
