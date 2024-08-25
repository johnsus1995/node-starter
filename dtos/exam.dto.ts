import { IsString, IsNumber, IsDate } from "class-validator";
import { IsDateString } from "../helpers/dateStringValidator";

export class ExamDto {
  @IsNumber()
  adminId: number;

  @IsString()
  description: string;

  @IsString()
  title: string;

  @IsString()
  @IsDateString("YYYY-MM-DD", {
    message: "Invalid date format. Expected format is YYYY-MM-DD",
  })
  deadline: string

  @IsString()
  status: string;

  @IsNumber()
  score: number | null;
}
