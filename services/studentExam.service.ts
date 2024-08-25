import { StudentExamDto } from "../dtos/studentExam.dto ";
import { StudentExam } from "../models/StudentExam";

export class StudentExamService {
  public async addStudentExam(data: StudentExamDto): Promise<any> {
    const newStudentExam = await StudentExam.create({
      examId: data.examId,
      studentId: data.examId,
      submitted: data.submitted,
    });

    return newStudentExam;
  }

  public async getStudentExams(): Promise<any[]> {
    const exams = await StudentExam.findAll({
      attributes: ["id", "title", "description"],
    });
    return exams;
  }
}
