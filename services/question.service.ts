import { QuestionDto } from "../dtos/question.dto";
import { Exam } from "../models/Exam";
import { Question } from "../models/Question";

export class QuestionService {
  public async addQuestion(data: QuestionDto): Promise<any> {
    const newQuestion = await Question.create({
      question: data.question,
      examId: data.examId,
    });

    return newQuestion;
  }
}