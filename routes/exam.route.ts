import { Router } from "express";
import { Route } from "../interfaces/routes.interface";
import { validationMiddleware } from "../middleware/validation.middleware";
import { authMiddleware } from "../middleware/auth.middleware";
import ExamController from "../controllers/exam.controller";
import { ExamDto } from "../dtos/exam.dto";

export class ExamRoutes implements Route {
  public router = Router();
  public path = "/exam";

  public examController = new ExamController();


  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      `${this.path}`,
      // authMiddleware,
      validationMiddleware(ExamDto, "body"),
      this.examController.createExam
    );

    // this.router.get(
    //   `${this.path}`,
    //   authMiddleware,
    //   this.postController.fetchPost
    // );

    // this.router.get(
    //   `${this.path}/:id`,
    //   authMiddleware,
    //   this.postController.fetchPostById
    // );

    // this.router.put(
    //   `${this.path}/:id`,
    //   authMiddleware,
    //   validationMiddleware(CreatePostDto, "body"),
    //   this.postController.updatePost
    // );
    // this.router.delete(
    //   `${this.path}/:id`,
    //   authMiddleware,
    //   this.postController.deletePost
    // );
  }
}