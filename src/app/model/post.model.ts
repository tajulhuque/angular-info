export class Post {

  question: string;
  answer: string;
  code?: string;

  constructor(question: string, answer: string, code?: string) {
    this.question = question;
    this.answer = answer;
  }

}
