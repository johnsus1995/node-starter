import { IsString, IsNumber } from "class-validator";

export class StudentExamDto {
  @IsNumber()
  id: number;

  // @IsNumber()
  // adminId: number;

  @IsNumber()
  studentId: number;

  @IsNumber()
  examId: number;

  @IsNumber()
  startTime: number;

  @IsNumber()
  endTime: number;

  @IsNumber()
  submitted: boolean;
}
