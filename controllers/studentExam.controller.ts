import { NextFunction, Request, Response } from "express";
import { StudentExamDto } from "../dtos/studentExam.dto ";
import { StudentExamService } from "../services/studentExam.service";

class StudentExamController {
  public studentExamService = new StudentExamService();

  public createExam = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const examData: StudentExamDto = req.body;
      // const userId = req.user.id;
      const data = await this.studentExamService.addStudentExam(examData);
      res.status(200).json({
        message: "New exam added",
        data,
      });
    } catch (error: any) {
      res
        .status(error.status ?? 500)
        .json({ message: error.message ?? "something went wrong" });
    }
  };

  public getExams = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const exams = await this.studentExamService.getPosts();
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

export default StudentExamController;
