import {
    IsString,
    IsNumber
  } from 'class-validator';

  export class QuestionDto {
    @IsNumber()
    questionId: number;

    @IsNumber()
    adminId: number;

    @IsNumber()
    examId: number;

    @IsString()
    question: string;
}
