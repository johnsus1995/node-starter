import {
    IsString,
    IsNumber
  } from 'class-validator';

  export class ExamDto {
    @IsNumber()
    adminId: number;

    @IsString()
    description: string;

    @IsString()
    title: string;
}
