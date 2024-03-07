import { NextFunction, Request, Response } from "express";
import { LoginDto, SignupDto } from "../dtos/auth.dto";
import { AuthService } from "../services/auth.service";

class AuthController {
  public authService = new AuthService();

  public signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: SignupDto = req.body;
      const data = await this.authService.signup(userData);
      res.status(200).json({
        message: "user created",
        data,
      });
      next();
    } catch (error: any) {
      res
        .status(error.status ?? 500)
        .json({ message: error.message ?? "something went wrong" });
    }
  };

  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: LoginDto = req.body;
      const data = await this.authService.login(userData);
      res.status(200).json({
        message: "Login success",
        data,
      });
      next();
    } catch (error: any) {
      res
        .status(error.status ?? 500)
        .json({ message: error.message ?? "something went wrong" });
    }
  };

  public verifyEmail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await this.authService.verifyEmail(req.params.token);
      res.status(200).json({message: "Email verified",data,});
      next();
    } catch (error: any) {
      res
        .status(error.status ?? 500)
        .json({ message: error.message ?? "something went wrong" });
    }
  };
}

export default AuthController;
