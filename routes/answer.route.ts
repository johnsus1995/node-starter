import { Router } from "express";
import { Route } from "../interfaces/routes.interface";
import { validationMiddleware } from "../middleware/validation.middleware";
import { authMiddleware } from "../middleware/auth.middleware";
import { StudentAnswerDto } from "../dtos/studentAnswer.dto";
import AnswerController from "../controllers/answer.controller";

export class AnswerRoutes implements Route {
  public router = Router();
  public path = "/answer";

  public answerController = new AnswerController();


  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      `${this.path}`,
      // authMiddleware,
      validationMiddleware(StudentAnswerDto, "body"),
      this.answerController.addAnswer
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