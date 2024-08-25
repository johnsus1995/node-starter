import { IsString, IsNumber } from "class-validator";

export class AnswerDto {
  @IsNumber()
  examId: number;

  @IsNumber()
  questionId: number;

  @IsString()
  answer: string;

  // @IsNumber()
  // points: number;
}