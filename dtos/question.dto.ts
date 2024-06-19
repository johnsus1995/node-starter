import {
    IsString,
    IsNumber
  } from 'class-validator';

  export class QuestionDto {
    @IsNumber()
    examId: number;

    @IsString()
    question: string;
}
