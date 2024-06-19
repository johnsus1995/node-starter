import { NextFunction, Request, Response } from "express";
import { ExamService } from "../services/exam.service";
import { ExamDto } from "../dtos/exam.dto";
import { QuestionService } from "../services/question.service";
import { QuestionDto } from "../dtos/question.dto";

class QuestionController {
  public questionService = new QuestionService();

  public createQuestion = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const questionData: QuestionDto = req.body;
      // const userId = req.user.id;
      const data = await this.questionService.addQuestion(questionData);
      res.status(200).json({
        message: "new question added",
        data,
      });
    } catch (error: any) {
      res
        .status(error.status ?? 500)
        .json({ message: error.message ?? "something went wrong" });
    }
  };
}

export default QuestionController;
