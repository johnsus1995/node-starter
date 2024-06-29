import { QuestionDto } from "../dtos/question.dto";
import { RoleDto } from "../dtos/role.dto";
import { Question } from "../models/Question";
import { Role } from "../models/Role";

export class RoleService {
  public async addRole(data: RoleDto): Promise<any> {
    const newQuestion = await Role.create({
      role: data.role,
    });

    return newQuestion;
  }
}
