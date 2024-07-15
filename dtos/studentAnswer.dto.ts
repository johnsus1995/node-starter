import { IsString, IsNumber } from "class-validator";

export class StudentAnswerDto {
  @IsNumber()
  studentExamId: number;

  @IsNumber()
  questionId: number;

  @IsString()
  answerText: string;
}
