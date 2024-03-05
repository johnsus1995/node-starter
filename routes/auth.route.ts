import { Router } from "express";
import { Route } from "../interfaces/routes.interface";
import AuthController from "../controllers/auth.controller";
import { validationMiddleware } from "../middleware/validation.middleware";
import { LoginDto, SignupDto } from "../dtos/auth.dto";

class AuthRoutes implements Route {
  public router = Router();
  public path = "/auth";
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      `${this.path}/signup`,
      validationMiddleware(SignupDto, "body"),
      this.authController.signup
    );
    this.router.post(
      `${this.path}/login`,
      validationMiddleware(LoginDto, "body"),
      this.authController.login
    );
    this.router.post(
      `${this.path}/verify-email/:token`,
      // validationMiddleware(LoginDto, "body"),
      this.authController.verifyEmail
    );
  }
}

export default AuthRoutes;
