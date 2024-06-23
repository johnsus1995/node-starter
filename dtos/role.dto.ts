import {
    IsString,
  } from 'class-validator';

  export class QuestionDto {
    @IsString()
    role: string;
}
