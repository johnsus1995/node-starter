import { AnswerDto } from "../dtos/answer.dto";
import { StudentAnswerDto } from "../dtos/studentAnswer.dto";
import { Answer } from "../models/Answer";
import { StudentAnswer } from "../models/StudentAnswer";


export class AnswerService {
  public async addStudentAnswer(data: StudentAnswerDto): Promise<any> {
    const newStudentAnswer = await StudentAnswer.create({
      studentExamId: data.studentExamId,
      questionId: data.questionId,
      answerText: data.answerText,
    });

    return newStudentAnswer;
  }

  public async addCorrectAnswer(data: AnswerDto): Promise<any> {
    JSON.parse(data.answer).forEach(async (item:any) => {
      await Answer.create({
        examId: data.examId,
        questionId: data.questionId,
        answer: item.answer,
        points: item.points,
      });
    });

    const newCorrectAnswer = {
      examId: data.examId,
      questionId: data.questionId,
      answer: JSON.parse(data.answer),
      // points: data.points,
    }

    return newCorrectAnswer;
  }
}
