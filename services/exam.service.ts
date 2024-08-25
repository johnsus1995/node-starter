import { ExamDto } from "../dtos/exam.dto";
import { Exam } from "../models/Exam";

export class ExamService {
  public async addExam(data: ExamDto): Promise<any> {
    const newExam = await Exam.create({
      adminId: data.adminId,
      description: data.description,
      title: data.title,
      deadline: data.deadline,
      status: data.status,
      score: data.score,
    });

    return newExam;
  }

  public async getExams(): Promise<any[]> {
    const exams = await Exam.findAll({
      attributes: ["id", "title", "description", "deadline", "status", "score"],
    });
    return exams;
  }
}

