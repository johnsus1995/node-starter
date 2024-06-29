import { NextFunction, Request, Response } from "express";
import { AnswerService } from "../services/answer.service";
import { StudentAnswerDto } from "../dtos/studentAnswer.dto";

class AnswerController {
  public answerService = new AnswerService();

  public addAnswer = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const answerData: StudentAnswerDto = req.body;
      // const userId = req.user.id;
      const data = await this.answerService.addAnswer(answerData);
      res.status(200).json({
        message: "Answer added to question (id:)",
        data,
      });
    } catch (error: any) {
      res
        .status(error.status ?? 500)
        .json({ message: error.message ?? "something went wrong" });
    }
  };
}

export default AnswerController;
