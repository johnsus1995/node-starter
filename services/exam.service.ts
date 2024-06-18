import { Exam } from "../models/Exam";

export class ExamService {
  public async addExam(data: any): Promise<any> {
    const newExam = await Exam.create({
      adminId: data.adminId,
      description: data.description,
      title: data.title,
    });

    return newExam;
  }
}
