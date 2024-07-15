import { IsString, IsNumber,IsOptional, IsBoolean } from "class-validator";

export class StudentExamDto {
  // @IsNumber()
  // adminId: number;

  @IsNumber()
  studentId: number;

  @IsNumber()
  examId: number;

  @IsOptional()
  @IsNumber()
  startTime: number;

  @IsOptional()
  @IsNumber()
  endTime: number;

  @IsBoolean()
  submitted: boolean;
}
