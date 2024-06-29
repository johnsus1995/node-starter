import { Router } from "express";
import { Route } from "../interfaces/routes.interface";
import { validationMiddleware } from "../middleware/validation.middleware";
import { authMiddleware } from "../middleware/auth.middleware";
import RoleController from "../controllers/role.controller";
import { RoleDto } from "../dtos/role.dto";

export class RoleRoutes implements Route {
  public router = Router();
  public path = "/role";

  public roleController = new RoleController();


  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      `${this.path}`,
      // authMiddleware,
      validationMiddleware(RoleDto, "body"),
      this.roleController.createRole
    );
  }
}