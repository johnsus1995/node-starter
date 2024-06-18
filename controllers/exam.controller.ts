import { NextFunction, Request, Response } from "express";
import { ExamService } from "../services/exam.service";
import { ExamDto } from "../dtos/exam.dto";

class ExamController {
  public examService = new ExamService();

  public createExam = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const postData: ExamDto = req.body;
      // const userId = req.user.id;
      const data = await this.examService.addExam(postData);
      res.status(200).json({
        message: "new exam added",
        data,
      });
    } catch (error: any) {
      res
        .status(error.status ?? 500)
        .json({ message: error.message ?? "something went wrong" });
    }
  };
}

export default ExamController;
