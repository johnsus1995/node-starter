import { Router } from "express";
import { Route } from "../interfaces/routes.interface";
import { validationMiddleware } from "../middleware/validation.middleware";
import { authMiddleware } from "../middleware/auth.middleware";
import QuestionController from "../controllers/question.controller";
import { QuestionDto } from "../dtos/question.dto";

export class QuestionRoutes implements Route {
  public router = Router();
  public path = "/question";

  public questionController = new QuestionController();


  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      `${this.path}`,
      // authMiddleware,
      validationMiddleware(QuestionDto, "body"),
      this.questionController.createQuestion
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