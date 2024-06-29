import { StudentAnswerDto } from "../dtos/studentAnswer.dto";
import { StudentAnswer } from "../models/StudentAnswer";

export class AnswerService {
  public async addAnswer(data: StudentAnswerDto): Promise<any> {
    const newAnswer = await StudentAnswer.create({
      studentExamId: data.studentExamId,
      questionId: data.questionId,
      answerText: data.answerText,
    });

    return newAnswer;
  }
}
