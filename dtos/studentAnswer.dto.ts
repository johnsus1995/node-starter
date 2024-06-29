import { IsString, IsNumber } from "class-validator";

export class StudentAnswerDto {
  @IsNumber()
  id: number;

  @IsNumber()
  studentExamId: number;

  @IsNumber()
  questionId: number;

  @IsString()
  answerText: string;
}
