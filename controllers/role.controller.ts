import { NextFunction, Request, Response } from "express";
import { ExamService } from "../services/exam.service";
import { ExamDto } from "../dtos/exam.dto";
import { RoleService } from "../services/role.service";
import { RoleDto } from "../dtos/role.dto";

class RoleController {
  public roleService = new RoleService();

  public createRole = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const roleData: RoleDto = req.body;
      const data = await this.roleService.addRole(roleData);
      res.status(200).json({
        message: "New role added.",
        data,
      });
    } catch (error: any) {
      res
        .status(error.status ?? 500)
        .json({ message: error.message ?? "something went wrong" });
    }
  };
}

export default RoleController;
