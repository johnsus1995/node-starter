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
      const data: ExamDto = req.body;
      // const userId = req.user.id;
      const newExam = await this.examService.addExam(data);
      res.status(200).json({
        message: "New exam added",
        newExam,
      });
    } catch (error: any) {
      res
        .status(error.status ?? 500)
        .json({ message: error.message ?? "something went wrong" });
    }
  };

  public getExams = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const exams = await this.examService.getExams();
      res.status(200).json({
        message: "Successfully fetched all exams.",
        exams,
      });
    } catch (error: any) {
      res
        .status(error.status ?? 500)
        .json({ message: error.message ?? "something went wrong" });
    }
  };
}

export default ExamController;
