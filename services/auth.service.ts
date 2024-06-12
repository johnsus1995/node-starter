import { LoginDto, SignupDto } from "../dtos/auth.dto";
import { LoginResponse } from "../interfaces/auth.interface";
import { User, UserAttributes } from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendEmail";
import { PostAttributes } from "../models/Post";

export class AuthService {
  public async signup(data: SignupDto): Promise<UserAttributes> {
    const user = await User.findOne({ where: { email: data.email } });
    if (user) {
      throw { status: 409, message: "User exists!" };
    }
    const newPassword = await bcrypt.hash(data.password, 10);
    const newUser = await User.create({
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber:data.phoneNumber,
      registrationNumber:data.registrationNumber,
      address1:data.address1,
      address2:data.address2,
      userName:data.userName,
      role:data.role,
      profileImage:data.profileImage,
      password: newPassword,
    });

    const result = {
      id: newUser.id,
      name: newUser.firstName,
      email: newUser.email,
      isVerified: newUser.isVerified,
    };

    const token = await jwt.sign(result, process.env.JWT_SECRET as string, {
      expiresIn: 86400,
    });

    sendEmail(data.email, token, data.firstName);

    return newUser;
  }

  public async login(data: LoginDto): Promise<LoginResponse> {
    const user = await User.findOne({ where: { email: data.email } });
    if (!user) {
      throw { status: 404, message: "User does not exists!" };
    }

    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) {
      throw { status: 400, message: "Password not match!" };
    }

    const payload = {
      id: user.id,
      // name: user.name,
      email: user.email,
      isVerified: user.isVerified,
    };
    const token = await jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: 86400,
    });

    return { user: payload, token: `Bearer ${token}` };
  }

  public async verifyEmail(token: string): Promise<PostAttributes> {
    const res = jwt.verify(token, process.env.JWT_SECRET as string) as any;
    const user = await User.update(
      {
        isVerified: true,
      },
      {
        where: {
          id: res.id,
        },
        returning: true,
      }
    );

    return user as any;
  }
}
